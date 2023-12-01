import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const port: number = parseInt(process.env.PORT) || 8081;

  await app.listen(port);

  console.log('Application listening on port:', await app.getUrl());
}
bootstrap();
