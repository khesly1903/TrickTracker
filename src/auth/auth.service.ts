import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../database/database.service';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const existing = await this.prisma.user.findFirst({ where: { email } });
    if (existing) throw new ConflictException('Email already in use.');

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: { email, passwordHash, roles: ['ADMIN'] },
    });

    return this.login({ id: user.id, email: user.email ?? null, roles: user.roles });
  }

  async validateUser(identifier: string, password: string) {
    const isNumericId = /^\d+$/.test(identifier);
    const user = isNumericId
      ? await this.prisma.user.findUnique({ where: { loginId: identifier } })
      : await this.prisma.user.findFirst({ where: { email: identifier } });

    if (!user || !user.isActive) return null;

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return null;

    const { passwordHash, refreshToken, ...safeUser } = user;
    return safeUser;
  }

  async login(user: { id: string; email: string | null; roles: any[] }) {
    const academyId = await this.resolveAcademyId(user.id, user.roles);

    const tokens = await this.generateTokens({ ...user, academyId });

    const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: refreshHash, lastLoginAt: new Date() },
    });

    return { ...tokens, user: { id: user.id, email: user.email, roles: user.roles, academyId } };
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  async refreshTokens(refreshToken: string) {
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify<JwtPayload>(refreshToken);
    } catch {
      throw new ForbiddenException('Access denied.');
    }

    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user || !user.isActive || !user.refreshToken) {
      throw new ForbiddenException('Access denied.');
    }

    const tokenMatches = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!tokenMatches) throw new ForbiddenException('Access denied.');

    const academyId = await this.resolveAcademyId(user.id, user.roles);

    const tokens = await this.generateTokens({ id: user.id, email: user.email, roles: user.roles, academyId });

    const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: refreshHash },
    });

    return { ...tokens, user: { id: user.id, email: user.email, roles: user.roles, academyId } };
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException();
    const academyId = await this.resolveAcademyId(userId, user.roles);
    const { passwordHash, refreshToken, ...safeUser } = user;
    return { ...safeUser, academyId };
  }

  private async resolveAcademyId(userId: string, roles: Role[]): Promise<string | null> {
    if (roles.includes(Role.ADMIN) || roles.includes(Role.OWNER) || roles.includes(Role.MANAGER)) {
      const academy = await this.prisma.academy.findUnique({ where: { ownerId: userId } });
      return academy?.id ?? null;
    }
    if (roles.includes(Role.STUDENT)) {
      const student = await this.prisma.student.findUnique({ where: { userId } });
      return student?.academyId ?? null;
    }
    if (roles.includes(Role.PARENT)) {
      const contact = await this.prisma.contact.findUnique({ where: { userId } });
      return contact?.academyId ?? null;
    }
    if (roles.includes(Role.INSTRUCTOR)) {
      const instructor = await this.prisma.instructor.findUnique({ where: { userId } });
      return instructor?.academyId ?? null;
    }
    return null;
  }

  private async generateTokens(user: { id: string; email: string | null; roles: any[]; academyId: string | null }) {
    const payload: JwtPayload = { sub: user.id, email: user.email, roles: user.roles, academyId: user.academyId };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN ?? '15m') as any,
      }),
      this.jwtService.signAsync(payload, {
        expiresIn: (process.env.JWT_REFRESH_EXPIRES_IN ?? '7d') as any,
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
