import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuppliesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateSupplyDto) {
    return this.prisma.supply.create({
      data: { ...dto, SupplyLine: { createMany: { data: dto.SupplyLine } } },
    });
  }

  async findAll() {
    return await this.prisma.supply.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.supply.findUniqueOrThrow({ where: { id } });
  }

  async update(id: string, dto: UpdateSupplyDto) {
    return this.prisma.supply.update({
      where: { id },
      data: {
        ...dto,
        SupplyLine: {
          deleteMany: { supplyId: id },
          createMany: { data: dto.SupplyLine },
        },
      },
      include: {
        SupplyLine: true,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.supply.delete({ where: { id } });
  }
}
