import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSupplyLineDto {
  @ApiProperty({ required: true })
  productId: string;
  @ApiProperty({ required: true })
  quantity: number;
}
export class CreateSupplyDto {
  @ApiProperty({ required: true })
  supplierName: string;
  @ApiProperty({ required: true })
  supplierAddress: string;
  @ApiProperty({ required: true })
  supplierTel: string;
  @ApiPropertyOptional()
  supplierEmail?: string;
  @ApiPropertyOptional()
  suppliertaxRegistrationNumber?: string;
  @ApiProperty({ required: true, type: [CreateSupplyLineDto] })
  SupplyLine: CreateSupplyLineDto[];
}
