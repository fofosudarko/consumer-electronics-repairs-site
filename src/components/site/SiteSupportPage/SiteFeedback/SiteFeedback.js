import { useCallback } from 'react';

import { useNotificationHandler } from 'src/hooks';
import { getNotification } from 'src/utils/notification';
import {
  SITE_VISITOR_MAIL_SENDER,
  SITE_VISITOR_MAIL_SUBJECT,
  SITE_VISITOR_MAIL_RECIPIENT,
} from 'src/config';

import SiteFeedbackInput from './SiteFeedbackInput';

function SiteFeedback() {
  const handleNotification = useNotificationHandler();

  let handleSendFeedbackResponse;

  handleSendFeedbackResponse = useCallback(() => {
    handleNotification(
      getNotification(
        'Feedback sent successfully. Thank you!'
      ).getSuccessNotification()
    );
  }, [handleNotification]);

  const handleSendFeedback = useCallback(async (feedback) => {
    const body = {
      sender: SITE_VISITOR_MAIL_SENDER,
      receiver: SITE_VISITOR_MAIL_RECIPIENT,
      subject: SITE_VISITOR_MAIL_SUBJECT,
      message: `
          Visitor name: ${feedback.name}
          Visitor email address: ${feedback.emailAddress}
          Message:
          ${feedback.message}
        `,
      html: false,
    };
    console.log(body);
  }, []);

  return (
    <div>
      <div className="site-fs-4 site-heading-font fw-bold">Send us a mail</div>
      <div className="py-5">
        <SiteFeedbackInput onSubmit={handleSendFeedback} />
      </div>
    </div>
  );
}

export default SiteFeedback;
