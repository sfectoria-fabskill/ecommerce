import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto, UpdateOrderStatusDto,  } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateOrderDto) {
    return this.prisma.order.create({
      data: { ...dto, OrderLine: { createMany: { data: dto.OrderLine } } },
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        OrderLine: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.order.findUniqueOrThrow({
      where: { id },
      include: {
        OrderLine: true,
      },
    });
  }

  async update(id: string, dto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: {
        ...dto,
        OrderLine: {
          deleteMany: { orderId: id },
          createMany: { data: dto.OrderLine },
        },
      },
      include: {
        OrderLine: true,
      },
    });
  }
  async updateStatus(id: string, dto: UpdateOrderStatusDto) {
    return await this.prisma.order.update({
      where: { id },
      data: {
        status: dto.status,
      },
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}
