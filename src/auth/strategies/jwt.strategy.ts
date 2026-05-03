import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from '@prisma/client';

export interface JwtPayload {
  sub: string;
  email: string | null;
  roles: Role[];
  academyId: string | null;
}

export interface AuthUser {
  id: string;
  email: string | null;
  roles: Role[];
  academyId: string | null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'fallback-secret',
    });
  }

  validate(payload: JwtPayload): AuthUser {
    return { id: payload.sub, email: payload.email, roles: payload.roles, academyId: payload.academyId };
  }
}
