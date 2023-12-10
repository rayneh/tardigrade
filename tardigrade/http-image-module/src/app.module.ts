import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Picture, PictureSchema } from './app.schema';

@Module({
  imports: [ // http-server-mongodb
    MongooseModule.forRoot('mongodb://user:password@http-server-mongodb:27017?directConnection=true&maxPoolSize=20&w=majority'),
    MongooseModule.forFeature([{ name: 'Picture', schema: PictureSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
