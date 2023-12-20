import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ required: true })
  clientName: string;
  @ApiProperty({ required: true })
  clientAddress: string;
  @ApiProperty({ required: true })
  clientPhone: string;
  @ApiProperty({ required: false })
  clientEmail?: string;
}
