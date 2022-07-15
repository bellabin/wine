import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: '*',
});
  const config = new DocumentBuilder()
    .setTitle('Wine api')
    .setDescription('The wine API description')
    .setVersion('1.0')
    .addTag('wine')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
