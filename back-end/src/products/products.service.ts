import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateProductDto) {
    return await this.prisma.product.create({ data: dto });
  }

  async findAll(avaible: boolean) {
    const products = await this.prisma.product.findMany({
      include: {
        OrderLine: { select: { quantity: true },where:{Order:{status:'confirmed'}} },
        SupplyLine: { select: { quantity: true }, },
      },
    });
    
    return products.map((elem) => {
      const { OrderLine, SupplyLine, ...rest } = elem;
      let sumSuppliersQuantity = 0;
      let sumOrdersQuantity = 0;
      OrderLine.forEach((el) => {
        sumOrdersQuantity += el.quantity;
      });
      SupplyLine.forEach((el) => {
        sumSuppliersQuantity += el.quantity;
      });
      return { stock: sumSuppliersQuantity - sumOrdersQuantity, ...rest };
    });;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        _count: {
          select: { OrderLine: true, SupplyLine: true },
        },
      },
    });
  }

  update(id: string, dto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
