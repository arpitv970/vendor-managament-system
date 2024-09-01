import { Vendor } from 'src/vendors/vendors.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class HistoricalPerformance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vendor, (vendor) => vendor.id)
  vendor: Vendor;

  @Column()
  date: Date;

  @Column('float', { default: 0 })
  onTimeDeliveryRate: number;

  @Column('float', { default: 0 })
  qualityRatingAvg: number;

  @Column('float', { default: 0 })
  averageResponseTime: number;

  @Column('float', { default: 0 })
  fulfillmentRate: number;
}
