import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../../customer/customer.service';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { RegisterCustomerDto } from './dto/register-customer.dto';
import * as bcrypt from 'bcrypt';
import { CustomerDocument } from '../../customer/schemas/customer.schema';

@Injectable()
export class CustomerAuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterCustomerDto) {
    // Check if email is already registered
    const existingCustomer = await this.customerService.findByEmail(
      registerDto.email,
    );
    if (existingCustomer) {
      throw new ConflictException('Email is already in use');
    }

    // Create the customer
    const customer = await this.customerService.create(registerDto);
    return this.generateAuthResponse(customer);
  }

  async login(loginDto: LoginCustomerDto) {
    // Find customer by email
    const customer = await this.customerService.findByEmail(loginDto.email);
    if (!customer) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      loginDto.password,
      customer.password,
    );
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateAuthResponse(customer);
  }

  private generateAuthResponse(customer: CustomerDocument) {
    const payload = { sub: customer._id, email: customer.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        _id: customer._id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        isVerified: customer.isVerified,
        isPremium: customer.isPremium,
        role: customer.role,
      },
    };
  }
}
