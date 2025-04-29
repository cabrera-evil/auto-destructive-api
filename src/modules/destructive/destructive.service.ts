import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DestructiveService {
  private readonly logger = new Logger(DestructiveService.name);

  kill() {
    this.logger.error(`Destructive action executed`);
    process.exit(1);
  }
}
