import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DestructiveService } from './destructive.service';

@ApiTags('destructive')
@Controller('destructive')
export class DestructiveController {
  constructor(private readonly destructiveService: DestructiveService) {}

  @Post('kill')
  kill() {
    return this.destructiveService.kill();
  }
}
