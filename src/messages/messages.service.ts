import { MessagesRepository } from './messagges.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepository = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
