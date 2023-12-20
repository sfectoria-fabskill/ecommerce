import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api/upload');
  app.useStaticAssets('upload', { prefix: '/upload' });

  const config = new DocumentBuilder()
    .setTitle('Sfectoria-Fabskill Uploader ')
    .setDescription('The Sfectoria-Fabskill API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}

bootstrap();
