import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Vendor } from './vendors.entity';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  create(@Body() createVendorDto: CreateVendorDto): Promise<Vendor> {
    return this.vendorsService.create(createVendorDto);
  }

  @Get()
  findAll(): Promise<Vendor[]> {
    return this.vendorsService.findAll();
  }

  @Get(':vendorId')
  findOne(@Param('vendorId') id: number): Promise<Vendor> {
    return this.vendorsService.findOne(id);
  }

  @Put(':vendorId')
  update(
    @Param('vendorId') id: number,
    @Body() updateVendorDto: UpdateVendorDto,
  ): Promise<Vendor> {
    return this.vendorsService.update(id, updateVendorDto);
  }

  @Delete(':vendorId')
  remove(@Param('vendorId') id: number): Promise<void> {
    return this.vendorsService.remove(id);
  }
}
