import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwaggerDoc(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle(process.env.npm_package_name || 'App')
    .setDescription(process.env.npm_package_description || 'API Documentation')
    .setVersion(process.env.npm_package_version || '1.0.0');
  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'method',
    },
  });
}
