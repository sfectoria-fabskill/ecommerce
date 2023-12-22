import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { Status } from '@prisma/client';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
export class UpdateOrderStatusDto {
  @ApiProperty({ enum: Status })
  status: Status;
}
