import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderServiceModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderServiceModule,
    { transport: Transport.TCP, options: { port: 3001 } },
  );
  await app.listen();
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
