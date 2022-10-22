import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [CoursesModule, TesteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
