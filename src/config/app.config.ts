import { Module } from '@nestjs/common';
import { CacheConfig } from './cache.config';
import { CronConfig } from './cron.config';
import { DatabaseConfig } from './database.config';
import { EnvironmentConfig } from './enviroment.config';
import { MailConfig } from './mail.config';
import { StaticConfig } from './static.config';

@Module({
  imports: [
    CacheConfig,
    CronConfig,
    DatabaseConfig,
    EnvironmentConfig,
    MailConfig,
    StaticConfig,
  ],
})
export class AppConfig {}
