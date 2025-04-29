import {
  CacheInterceptor,
  CacheModule,
  CacheStore,
} from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => {
        const store: CacheStore = (await redisStore({
          username: process.env.REDIS_USERNAME,
          password: process.env.REDIS_PASSWORD,
          ttl: parseInt(process.env.CACHE_TTL),
          socket: {
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT),
            tls: process.env.REDIS_TLS === 'true' ? true : false,
          },
        })) as unknown as CacheStore;
        return {
          isGlobal: true,
          store,
        };
      },
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class CacheConfig {}
