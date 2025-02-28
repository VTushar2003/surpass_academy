import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CustomerAuthController } from './customer-auth/customer-auth.controller';
import { CustomerAuthService } from './customer-auth/customer-auth.service';
import { AdminAuthController } from './admin-auth/admin-auth.controller';
import { AdminAuthService } from './admin-auth/admin-auth.service';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [JwtModule.register({}), CustomerModule],
  controllers: [CustomerAuthController, AdminAuthController],
  providers: [CustomerAuthService, AdminAuthService],
})
export class AuthModule {}
