import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Picture, PictureSchema } from './app.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel('Picture') private pictureModel: Model<Picture>) {}

  async uploadPicture(pictureData: Picture): Promise<Picture> {
    const newPicture = new this.pictureModel({
      tokenId: pictureData.tokenId,
      counter: pictureData.counter,
      image: pictureData.image,
      metadata: pictureData.metadata,
      // any other fields from your Picture schema
    });
    return newPicture.save();
    }

  async downloadPicture(tokenId: string): Promise<Picture> {
    // Logic to retrieve and download the picture by tokenId
    return this.pictureModel.findOne({ tokenId }).exec();
  }

  async getPictureContent(tokenId: string, counter: string): Promise<Picture> {
    // Logic to get specific picture content
    return this.pictureModel.findOne({ tokenId, counter: parseInt(counter) }).exec();
  }
}
