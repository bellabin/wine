import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.setGlobalPrefix('/api');
//   app.enableCors({
//     origin: '*',
//     methods: 'GET, PUT, POST, DELETE',
//     // allowedHeaders: '*',
//     // credentials : true,
//     maxAge:3600,
//     preflightContinue: false,
//     optionsSuccessStatus: 204
// });
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,PATCH,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
//   next();
// });

// app.enableCors();


  const config = new DocumentBuilder()
    .setTitle('Wine api')
    .setDescription('The wine API description')
    .setVersion('1.0')
    .addTag('wine')
    .addTag('test')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
