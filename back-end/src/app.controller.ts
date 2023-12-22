import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { extname } from 'path';
import { serverUploadConfig } from 'constants/config';
import { existsSync, mkdirSync } from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

const multerConfig = {
  dest: 'upload',
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
         image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiTags('Upload Image')
  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = multerConfig.dest + '/products';
          // Create folder if doesn't exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname) || '.jpg'}`);
        },
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: any,
  ) {
    const extension = extname(file.originalname) || '.jpg'; // Extract extension or default to '.jpg'
    const filenameWithExtension = file.filename.includes('.')
      ? file.filename
      : `${file.filename}${extension}`;

    let data = {
      description: dto.description,
      alt: dto.alt,
      extension: extension.substring(1), // Remove the leading dot from the extension
      type: file.mimetype,
      url: serverUploadConfig + 'upload/products/' + filenameWithExtension,
    };
    return data;
  }
}
