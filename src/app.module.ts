import { AppConfig } from '@/config/app.config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [AppConfig, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
