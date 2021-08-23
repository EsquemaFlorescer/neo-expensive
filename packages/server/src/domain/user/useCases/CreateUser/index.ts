import { CreateUserRequestDTO } from './CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

import { PrismaUsersRepository } from '@user/repositories/drivers/prisma';
import { MailTrapMailService } from '@user/services/mail/drivers/Mailtrap';
import { BullQueueService } from '@user/services/queue/drivers/Bull';
import { prisma } from '@infra/prisma';
import { User } from '@user/entities';

/** creates an user instance */
const user = new User(null);

/* creates an instance of the mail service */
const mailService = new MailTrapMailService();
const queueService = new BullQueueService();

/** creates an instance of the user repository */
const usersRepository = new PrismaUsersRepository(prisma);

/** gives the dependencies to the use case */
const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  mailService,
  queueService,
  user
);

/** supply the controller with the use case */
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase, CreateUserRequestDTO };
