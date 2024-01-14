import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body('content') body: CreateMessageDto) {
    console.log(body);
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `hello i am message with ID: ${id}`;
  }
}
