import { Request, Response } from 'express';

import { Controller } from '@infra/http/interface/Controller';
import { ok, clientError } from '@infra/http/interface/HttpResponse';

import {
  ActivateUserRequestDTO,
  ActivateUserResponseDTO
} from './ActivateUserDTO';
import { ActivateUserUseCase } from './ActivateUserUseCase';

export class ActivateUserController implements Controller {
  constructor(private activateUserUseCase: ActivateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data: ActivateUserRequestDTO = request.headers['authorization'];

      const caseResponse = await this.activateUserUseCase.execute(data);

      const { body, statusCode } = ok<ActivateUserResponseDTO>(caseResponse);

      return response.status(statusCode).json(body);
    } catch (error) {
      const { body, statusCode } = clientError(error);

      return response.status(statusCode).json(body);
    }
  }
}
