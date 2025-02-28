import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginAdminDto } from './dto/login-admin.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: LoginAdminDto) {
    if (!(await this.validateAdmin(loginDto))) {
      throw new UnauthorizedException('Invalid admin credentials');
    }

    return this.getTokens(loginDto.email);
  }

  private async validateAdmin(loginDto: LoginAdminDto): Promise<boolean> {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminHashedPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminHashedPassword) {
      throw new InternalServerErrorException('Admin credentials not set');
    }

    if (loginDto.email !== adminEmail) {
      return false;
    }

    return bcrypt.compare(loginDto.password, adminHashedPassword);
  }

  private async getTokens(email: string) {
    const payload = { sub: 'admin', email, role: 'admin' };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ADMIN_SECRET,
        expiresIn: '1h',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ADMIN_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
