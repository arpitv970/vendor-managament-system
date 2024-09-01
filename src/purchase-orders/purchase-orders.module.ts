import { Module } from '@nestjs/common';
import { PurchaseOrdersController } from './purchase-orders.controller';
import { PurchaseOrdersService } from './purchase-orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrder } from './purchase-orders.entity';
import { Vendor } from 'src/vendors/vendors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseOrder, Vendor])],
  controllers: [PurchaseOrdersController],
  providers: [PurchaseOrdersService],
})
export class PurchaseOrdersModule {}
