import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { PurchaseOrder } from './purchase-orders.entity';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  create(
    @Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
  ): Promise<PurchaseOrder> {
    return this.purchaseOrdersService.create(createPurchaseOrderDto);
  }

  @Get()
  findAll(@Query('vendorId') vendorId?: number): Promise<PurchaseOrder[]> {
    return this.purchaseOrdersService.findAll(vendorId);
  }

  @Get(':poId')
  findOne(@Param('poId') poId: number): Promise<PurchaseOrder> {
    return this.purchaseOrdersService.findOne(poId);
  }

  @Put(':poId')
  update(
    @Param('poId') poId: number,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto,
  ): Promise<PurchaseOrder> {
    return this.purchaseOrdersService.update(poId, updatePurchaseOrderDto);
  }

  @Delete(':poId')
  remove(@Param('poId') poId: number): Promise<void> {
    return this.purchaseOrdersService.remove(poId);
  }
}
