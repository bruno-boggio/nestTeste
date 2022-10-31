import { Module } from '@nestjs/common';
import { TesteController } from './teste.controller';
import { TesteService } from './teste.service';

@Module({
  controllers: [TesteController],
  providers: [TesteService]
})
export class TesteModule {}
