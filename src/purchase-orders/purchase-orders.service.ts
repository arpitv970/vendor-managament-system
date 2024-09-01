import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseOrder } from './purchase-orders.entity';
import { Repository } from 'typeorm';
import { Vendor } from 'src/vendors/vendors.entity';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private readonly purchaseOrderRepository: Repository<PurchaseOrder>,
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  async create(
    createPurchaseOrderDto: CreatePurchaseOrderDto,
  ): Promise<PurchaseOrder> {
    const vendor = await this.vendorRepository.findOne({
      where: {
        id: createPurchaseOrderDto.vendorId,
      },
    });

    if (!vendor) {
      throw new NotFoundException(
        `Vendor with ID ${createPurchaseOrderDto.vendorId} not found`,
      );
    }

    const purchaseOrder = this.purchaseOrderRepository.create({
      ...createPurchaseOrderDto,
      vendor,
    });

    return this.purchaseOrderRepository.save(purchaseOrder);
  }

  async findAll(vendorId?: number): Promise<PurchaseOrder[]> {
    if (vendorId) {
      return this.purchaseOrderRepository.find({
        where: {
          id: vendorId,
        },
      });
    }

    return this.purchaseOrderRepository.find();
  }

  async findOne(id: number): Promise<PurchaseOrder> {
    const purchaseOrder = this.purchaseOrderRepository.findOne({
      where: {
        id,
      },
    });

    if (!purchaseOrder) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
    return purchaseOrder;
  }

  async update(
    id: number,
    updatePurchaseOrderDto: UpdatePurchaseOrderDto,
  ): Promise<PurchaseOrder> {
    await this.purchaseOrderRepository.update(id, updatePurchaseOrderDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.purchaseOrderRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
  }
}
