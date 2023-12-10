import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json({ limit: '50mb' })); // Adjust the limit as needed
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(helmet());
  app.enableCors(); // Simple usage (Enable for all origins)
  await app.listen(3001);
}
bootstrap();
