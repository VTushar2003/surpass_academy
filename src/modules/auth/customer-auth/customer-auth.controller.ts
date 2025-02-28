import { Body, Controller, Post } from '@nestjs/common';
import { CustomerAuthService } from './customer-auth.service';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { RegisterCustomerDto } from './dto/register-customer.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('customer-auth')
@Controller('auth/customer')
export class CustomerAuthController {
  constructor(private customerAuthService: CustomerAuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register new customer' })
  register(@Body() registerDto: RegisterCustomerDto) {
    return this.customerAuthService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Customer login' })
  login(@Body() loginDto: LoginCustomerDto) {
    return this.customerAuthService.login(loginDto);
  }
}
