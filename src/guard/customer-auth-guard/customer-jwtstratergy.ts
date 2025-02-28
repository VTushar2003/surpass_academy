import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { CustomerService } from '@/modules/customer/customer.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly customerService: CustomerService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(
        'JWT_SECRET',
        'default_secret_key',
      ), // Fallback
    });
  }

  async validate(payload: any) {
    const customer = await this.customerService.findByEmail(payload.sub);
    if (!customer) {
      throw new UnauthorizedException('Invalid token');
    }
    return customer;
  }
}
