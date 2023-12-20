import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ required: true })
  titre: string;
  @ApiProperty({ required: true })
  description: string;
  @ApiProperty({ required: true })
  price: number;
}
