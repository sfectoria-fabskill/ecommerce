import { Module } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SuppliesController } from './supplies.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SuppliesController],
  providers: [SuppliesService,PrismaService]
})
export class SuppliesModule {}
