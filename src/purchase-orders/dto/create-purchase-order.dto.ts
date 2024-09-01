import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePurchaseOrderDto {
  @IsString()
  @IsNotEmpty()
  poNumber: string;

  @IsNumber()
  @IsNotEmpty()
  vendorId: number;

  @IsDate()
  @IsNotEmpty()
  orderDate: Date;

  @IsDate()
  @IsOptional()
  deliveryDate?: Date;

  @IsObject()
  items: Record<string, any>;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsDate()
  @IsNotEmpty()
  issueDate: Date;

  @IsDate()
  @IsOptional()
  acknowledgmentDate?: Date;
}
