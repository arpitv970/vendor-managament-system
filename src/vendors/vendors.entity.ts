import { PurchaseOrder } from 'src/purchase-orders/purchase-orders.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contactDetails: string;

  @Column()
  address: string;

  @Column({ unique: true })
  vendorCode: string;

  @Column('float', { default: 0 })
  onTimeDeliveryRate: number;

  @Column('float', { default: 0 })
  qualityRatingAvg: number;

  @Column('float', { default: 0 })
  averageResponseTime: number;

  @Column('float', { default: 0 })
  fulfillmentRate: number;

  @OneToMany(() => PurchaseOrder, (purchaseOrder) => purchaseOrder.vendor)
  purchaseOrders: PurchaseOrder[];
}
