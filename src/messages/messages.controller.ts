import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body('content') body: any) {
    console.log(body);
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `hello i am message with ID: ${id}`;
  }
}
