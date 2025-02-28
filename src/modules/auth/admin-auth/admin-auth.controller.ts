import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { LoginAdminDto } from './dto/login-admin.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('admin-auth')
@Controller('auth/admin')
export class AdminAuthController {
  constructor(private adminAuthService: AdminAuthService) {}

  // @Post('login')
  // @ApiOperation({ summary: 'Admin login' })
  // login(@Body() loginDto: LoginAdminDto) {
  //   return this.adminAuthService.login(loginDto);
  // }
}
