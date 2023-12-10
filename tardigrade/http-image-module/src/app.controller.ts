import { Controller, Get, Post, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { Picture, PictureSchema } from './app.schema';
import { Express } from 'express';
import * as mongoose from 'mongoose';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/upload')
  async uploadPicture(@Body() pictureData: Picture) {
    return this.appService.uploadPicture(pictureData);
  }

  @Get('/download/:tokenId')
  async downloadPicture(@Param('tokenId') tokenId: string) {
    return await this.appService.downloadPicture(tokenId);
  }

  @Get('/:tokenId/:counter')
  async getPictureContent(@Param('tokenId') tokenId: string, @Param('counter') counter: string) {
    return this.appService.getPictureContent(tokenId, counter);
  }
}
