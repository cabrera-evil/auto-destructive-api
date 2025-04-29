import { Module } from '@nestjs/common';
import { EnvironmentConfig } from './enviroment.config';

@Module({
  imports: [
    // CacheConfig,
    // CronConfig,
    // DatabaseConfig,
    EnvironmentConfig,
    // MailConfig,
    // StaticConfig,
  ],
})
export class AppConfig {}
