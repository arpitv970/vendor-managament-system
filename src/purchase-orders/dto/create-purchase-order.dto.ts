import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { PurchaseOrderStatus } from 'src/common/enums';

export class CreatePurchaseOrderDto {
  @IsString()
  @IsNotEmpty()
  poNumber: string;

  @IsNumber()
  vendorId: number;

  @IsDate()
  orderDate: Date;

  @IsDate()
  @IsOptional()
  deliveryDate?: Date;

  @IsObject()
  items: Record<string, any>;

  @IsNumber()
  quantity: number;

  @IsEnum(PurchaseOrderStatus)
  status: PurchaseOrderStatus;

  @IsDate()
  issueDate: Date;

  @IsDate()
  @IsOptional()
  acknowledgmentDate?: Date;
}
