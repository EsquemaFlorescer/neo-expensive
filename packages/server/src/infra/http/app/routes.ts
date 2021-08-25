import { Router } from 'express';

import { user } from '@user';
import {
  accessTokenAuth,
  activateTokenAuth
} from '@infra/http/middlewares/token';

export const router = Router();

router.post('/user', user.createUser);
router.post('/user/activate', activateTokenAuth, user.activateUser);
router.post('/login', user.login);
router.post('/refresh-token', user.refreshToken);
