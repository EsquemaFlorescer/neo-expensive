import { Request, Response } from 'express';

import { createUserController } from './useCases/CreateUser';
import { activateUserController } from './useCases/ActivateUser';
import { authUserController } from './useCases/AuthUser';
import { refreshUserTokenController } from './useCases/RefreshUserToken';
import { revokeRefreshUserTokenController } from './useCases/RevokeUserRefreshToken';

/* export all the drivers from here */

export const user = {
  createUser: async (request: Request, response: Response) => {
    return createUserController.handle(request, response);
  },

  activateUser: async (request: Request, response: Response) => {
    return activateUserController.handle(request, response);
  },

  login: async (request: Request, response: Response) => {
    return authUserController.handle(request, response);
  },

  refreshToken: async (request: Request, response: Response) => {
    return refreshUserTokenController.handle(request, response);
  },

  logout: async (request: Request, response: Response) => {
    return revokeRefreshUserTokenController.handle(request, response);
  }
};
