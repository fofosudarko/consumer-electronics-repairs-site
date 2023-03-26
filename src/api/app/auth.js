// auth.js

import { appApi } from '../axios';

class AuthService {
  static async signIn({ body = null }) {
    return await appApi.post(`signin`, body);
  }

  static async signUp({ body = null }) {
    return await appApi.post(`signup`, body);
  }

  static async registerMobileAccount({ body = null }) {
    return await appApi.post(`register-mobile-account`, body);
  }

  static async registerAccountRole({ account = null, body = null }) {
    const { id } = account ?? {};
    return await appApi.post(`accounts/${id}/register-role`, body);
  }
}

export default AuthService;
