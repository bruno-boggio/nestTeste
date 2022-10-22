import { Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response){
        return response.status(200).send('Listagem de cursosss')
    }

    @Get(':id')
    findOne(@Param('id') id:string)
    {
        return `Curso #${id}`
    }

    @Post()
    create(@Body('name') body) {
        return body;
       }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body) {
        return `Atualização do curso #${id}`
    }

    @Delete(':id')
  remove(@Param('id') id: string) {
    return `Exclusao do Curso #${id}`;
  }
}
