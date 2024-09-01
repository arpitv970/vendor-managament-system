import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrdersController } from './purchase-orders.controller';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrder } from './purchase-orders.entity';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

describe('PurchaseOrdersController', () => {
  let controller: PurchaseOrdersController;
  let service: PurchaseOrdersService;

  const createPurchaseOrderDto: CreatePurchaseOrderDto = {
    poNumber: 'PO123456',
    vendorId: 1,
    orderDate: new Date('2024-09-01'),
    deliveryDate: new Date('2024-09-10'),
    items: { item1: 10, item2: 5 },
    quantity: 15,
    status: 'Pending',
    issueDate: new Date('2024-09-01'),
    acknowledgmentDate: new Date('2024-09-02'),
  };

  const updatePurchaseOrderDto: UpdatePurchaseOrderDto = {
    // Add properties for updating purchase orders as necessary
    status: 'Completed',
    deliveryDate: new Date('2024-09-12'),
  };

  const purchaseOrder: PurchaseOrder = {
    id: 1,
    poNumber: 'PO123456',
    vendor: { id: 1, name: 'Vendor 1' } as any, // Mock vendor entity as needed
    orderDate: new Date('2024-09-01'),
    deliveryDate: new Date('2024-09-10'),
    items: { item1: 10, item2: 5 },
    quantity: 15,
    status: 'Pending',
    qualityRating: 4.5,
    issueDate: new Date('2024-09-01'),
    acknowledgmentDate: new Date('2024-09-02'),
  };

  const updatedPurchaseOrder: PurchaseOrder = {
    id: 1,
    poNumber: 'PO123456',
    vendor: { id: 1, name: 'Vendor 1' } as any, // Mock vendor entity as needed
    orderDate: new Date('2024-09-01'),
    deliveryDate: new Date('2024-09-12'),
    items: { item1: 10, item2: 5 },
    quantity: 15,
    status: 'Completed',
    qualityRating: 4.8,
    issueDate: new Date('2024-09-01'),
    acknowledgmentDate: new Date('2024-09-02'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseOrdersController],
      providers: [
        {
          provide: PurchaseOrdersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PurchaseOrdersController>(PurchaseOrdersController);
    service = module.get<PurchaseOrdersService>(PurchaseOrdersService);
  });

  it('should create a purchase order', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(purchaseOrder);

    expect(await controller.create(createPurchaseOrderDto)).toBe(purchaseOrder);
  });

  it('should return an array of purchase orders', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue([purchaseOrder]);

    expect(await controller.findAll()).toEqual([purchaseOrder]);
  });

  it('should return a single purchase order by id', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(purchaseOrder);

    expect(await controller.findOne(purchaseOrder.id)).toBe(purchaseOrder);
  });

  it('should update a purchase order by id', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(updatedPurchaseOrder);

    expect(
      await controller.update(purchaseOrder.id, updatePurchaseOrderDto),
    ).toBe(updatedPurchaseOrder);
  });

  it('should remove a purchase order by id', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(undefined);

    await expect(controller.remove(purchaseOrder.id)).resolves.toBeUndefined();
  });
});
