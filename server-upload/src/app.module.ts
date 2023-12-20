import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediasService } from './medias/medias.service';
import { PrismaModule } from './prisma/prisma.module';
import { MediasModule } from './medias/medias.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ PrismaModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
