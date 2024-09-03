import { PurchaseOrderStatus } from 'src/common/enums';
import { Vendor } from 'src/vendors/vendors.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PurchaseOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  poNumber: string;

  @ManyToOne(() => Vendor, (vendor) => vendor.purchaseOrders)
  vendor: Vendor;

  @Column()
  orderDate: Date;

  @Column({ nullable: true })
  deliveryDate: Date;

  @Column('json')
  items: Record<string, any>;

  @Column('int')
  quantity: number;

  @Column()
  status: PurchaseOrderStatus;

  @Column('float', { nullable: true })
  qualityRating: number;

  @Column()
  issueDate: Date;

  @Column({ nullable: true })
  acknowledgmentDate: Date;
}
