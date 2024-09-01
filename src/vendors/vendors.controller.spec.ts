import { Test, TestingModule } from '@nestjs/testing';
import { VendorsController } from './vendors.controller';
import { VendorsService } from './vendors.service';
import { Vendor } from './vendors.entity';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { PurchaseOrder } from 'src/purchase-orders/purchase-orders.entity';
import { PurchaseOrdersService } from 'src/purchase-orders/purchase-orders.service';
import { PurchaseOrdersController } from 'src/purchase-orders/purchase-orders.controller';

describe('VendorsController', () => {
  let controller: VendorsController;
  let vendorsService: VendorsService;
  let purchaseOrderService: PurchaseOrdersService;

  const createVendorDto: CreateVendorDto = {
    name: 'Vendor A',
    contactDetails: '123-456-7890',
    address: '123 Vendor St',
    vendorCode: 'VEND001',
  };

  const updateVendorDto: UpdateVendorDto = {
    name: 'Updated Vendor A',
    address: '456 Updated St',
  };

  const vendor: Vendor = {
    id: 1,
    name: 'Vendor A',
    contactDetails: '123-456-7890',
    address: '123 Vendor St',
    vendorCode: 'VEND001',
    onTimeDeliveryRate: 0,
    qualityRatingAvg: 0,
    averageResponseTime: 0,
    fulfillmentRate: 0,
    purchaseOrders: [],
  };

  const updatedVendor: Vendor = {
    id: 1,
    name: 'Updated Vendor A',
    contactDetails: '123-456-7890',
    address: '456 Updated St',
    vendorCode: 'VEND001',
    onTimeDeliveryRate: 0,
    qualityRatingAvg: 0,
    averageResponseTime: 0,
    fulfillmentRate: 0,
    purchaseOrders: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorsController, PurchaseOrdersController],
      providers: [
        {
          provide: VendorsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: PurchaseOrdersService,
          useValue: {
            // Mock methods of PurchaseOrderService if necessary
          },
        },
      ],
    }).compile();

    controller = module.get<VendorsController>(VendorsController);
    vendorsService = module.get<VendorsService>(VendorsService);
    purchaseOrderService = module.get<PurchaseOrdersService>(
      PurchaseOrdersService,
    );
  });

  it('should create a vendor', async () => {
    jest.spyOn(vendorsService, 'create').mockResolvedValue(vendor);

    expect(await controller.create(createVendorDto)).toBe(vendor);
  });

  it('should return an array of vendors', async () => {
    jest.spyOn(vendorsService, 'findAll').mockResolvedValue([vendor]);

    expect(await controller.findAll()).toEqual([vendor]);
  });

  it('should return a single vendor by id', async () => {
    jest.spyOn(vendorsService, 'findOne').mockResolvedValue(vendor);

    expect(await controller.findOne(vendor.id)).toBe(vendor);
  });

  it('should update a vendor by id', async () => {
    jest.spyOn(vendorsService, 'update').mockResolvedValue(updatedVendor);

    expect(await controller.update(vendor.id, updateVendorDto)).toBe(
      updatedVendor,
    );
  });

  it('should remove a vendor by id', async () => {
    jest.spyOn(vendorsService, 'remove').mockResolvedValue(undefined);

    await expect(controller.remove(vendor.id)).resolves.toBeUndefined();
  });
});
