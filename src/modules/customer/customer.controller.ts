import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Customer } from './schemas/customer.schema';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({ status: 201, description: 'Customer successfully created.' })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a customer by id' })
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a customer' })
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer' })
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }

  @Patch(':id/location')
  @ApiOperation({ summary: 'Update customer location' })
  updateLocation(
    @Param('id') id: string,
    @Body('coordinates') coordinates: number[],
  ) {
    return this.customerService.updateLocation(id, coordinates);
  }

  @Post(':id/friends/:friendId')
  @ApiOperation({ summary: 'Add a friend' })
  addFriend(@Param('id') id: string, @Param('friendId') friendId: string) {
    return this.customerService.addFriend(id, friendId);
  }

  // @Patch(':id/privacy')
  // @ApiOperation({ summary: 'Update privacy settings' })
  // updatePrivacySettings(
  //   @Param('id') id: string,
  //   @Body() privacySettings: Partial<Customer['privacySettings']>,
  // ) {
  //   return this.customerService.updatePrivacySettings(id, privacySettings);
  // }
}
