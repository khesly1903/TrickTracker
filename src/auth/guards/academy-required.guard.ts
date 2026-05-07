import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthUser } from '../strategies/jwt.strategy';

@Injectable()
export class AcademyRequiredGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const user: AuthUser | undefined = request.user;
    if (!user) return true; // JwtAuthGuard handles unauthenticated

    const path: string = request.route?.path ?? '';
    if (path.startsWith('/academies') || path.startsWith('/portal')) return true;

    if (!user.academyId) {
      throw new ForbiddenException('Academy setup required.');
    }

    return true;
  }
}
