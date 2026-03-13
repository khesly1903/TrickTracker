import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable class-validator globally for all DTOs in the project
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically strip non-whitelisted properties (e.g. admin: true) from the DTO
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are provided
      transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
      transformOptions: {
        enableImplicitConversion: true, // Very important for URL Queries (?page=1 or ?Fullname=) to map to DTO fields
      },
    }),
  );

  // Swagger Configuration
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('TrickTracker API')
      .setDescription('The TrickTracker API description')
      .setVersion('1.0')
      .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, documentFactory);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
