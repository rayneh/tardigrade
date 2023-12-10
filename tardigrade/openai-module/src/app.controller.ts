// src/app.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { AppService } from './app.service';
import { additionalFeatures } from './extra/additionalFeatures';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-image')
  async createImage(@Body() createImageDto: CreateImageDto): Promise<any> {
    const { image1, image2, featureIndex } = createImageDto;

    // Implement logic to handle the case where only one image is provided
    const additionalFeature = additionalFeatures[featureIndex];

    // You need to implement saving of the image and getting its URL
    const result = await this.appService.createCombinedImage(
      image1,
      image2,
      additionalFeature,
    );
    return {
      prompt: result[0].revised_prompt,
      url: result[0].url,
    };
  }
}
