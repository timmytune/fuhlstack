import { join } from 'path'
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'order',
      protoPath: join(__dirname, '../../proto/order.proto'),
      url: 'localhost:5000',
    },
  });

  await app.listen();
}
bootstrap();
