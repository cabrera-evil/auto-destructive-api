import { Module } from '@nestjs/common';
import { DestructiveController } from './destructive.controller';
import { DestructiveService } from './destructive.service';

@Module({
  controllers: [DestructiveController],
  providers: [DestructiveService],
})
export class DestructiveModule {}
