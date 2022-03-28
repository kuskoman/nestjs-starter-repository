import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseConfig, baseConfig } from './config/base.config';
import 'source-map-support/register';

const bootstrap = async () => {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const { port } = app.get<BaseConfig>(baseConfig.KEY);

  await app.listen(port, () => {
    logger.log(`Server listening on http://localhost:${port}`);
  });
};

bootstrap();
