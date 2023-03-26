// notification.js

import { appApi } from '../axios';

class NotificationService {
  static async confirmAccountActivationCode({ body = null, reset = null }) {
    return await appApi.post(
      `notifications/confirm-account-activation-code`,
      body,
      { params: { reset } }
    );
  }

  static async sendAccountActivationCode({ body = null, reset = null }) {
    return await appApi.post(
      `notifications/send-account-activation-code`,
      body,
      { params: { reset } }
    );
  }

  static async sendEmail({ body = null }) {
    return await appApi.post(`notifications/email`, body);
  }

  static async sendFeedback({ body = null }) {
    return await appApi.post(`notifications/send-feedback`, body);
  }
}

export default NotificationService;
