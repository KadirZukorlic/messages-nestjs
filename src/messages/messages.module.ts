import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messagges.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository], // Things that can be used as dependencies for other classes
})
export class MessagesModule {}
