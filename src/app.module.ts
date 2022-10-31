import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TesteModule } from './teste/teste.module';
import { CoursesService } from './courses/courses.service';
import { CoursesController } from './courses/courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoursesModule, TesteModule, TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController,CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
