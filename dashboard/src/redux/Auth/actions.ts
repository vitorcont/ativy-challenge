import { StorageEnum } from '@portal/models/enumerators/storage';

import AuthApi from '@portal/api/auth';
import StorageService from '@portal/services/storage';

import { AUTH_LOGIN } from './types';

export const authenticate = (params: models.AuthRequest, callback?: () => void) => async (dispatch: any) => {
  try {
    const payload = await AuthApi.login(params);
    StorageService.setItem(StorageEnum.TOKEN, payload);
    dispatch({
      payload,
      type: AUTH_LOGIN,
    });
    if (callback) {
      callback();
    }
  } catch (err) {
    // handle error
  }
};