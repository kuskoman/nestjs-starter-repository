import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { HealthModule } from './health/health.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [AppConfigModule, HealthModule, PrometheusModule.register()],
})
export class AppModule {}
