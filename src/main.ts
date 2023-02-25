import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: [
      'https://dashboard.podpolye.org',
      'http://localhost:3000',
      'http://localhost:3111',
    ],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(join(__dirname, '../..', 'public'), {
    prefix: '/public/',
  });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Podpolye API')
    .setVersion('1')
    .addBearerAuth()
    .addServer('http://localhost:3000')
    .addServer('https://api.podpolye.org')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, document);
  await app.listen(3005);
}
bootstrap();
