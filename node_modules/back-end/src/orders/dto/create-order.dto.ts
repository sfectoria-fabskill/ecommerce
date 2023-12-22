import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrderLineDto {
  @ApiProperty({ required: true })
  productId: string;
  @ApiProperty({ required: true })
  quantity: number;
}
export class CreateOrderDto {
  @ApiProperty({ required: true })
  clientName: string;
  @ApiProperty({ required: true })
  clientAddress: string;
  @ApiProperty({ required: true })
  clientPhone: string;
  @ApiPropertyOptional()
  clientEmail?: string;
  @ApiProperty({ required: true, type: [CreateOrderLineDto] })
  OrderLine: CreateOrderLineDto[];
}
