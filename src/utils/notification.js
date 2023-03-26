// notification.js

class Notification {
  constructor(message) {
    this._message = message;
    this._name = 'Notification';
  }

  set name(val) {
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set message(val) {
    this._message = val;
  }

  get message() {
    return this._message;
  }
}

class SuccessNotification extends Notification {
  constructor(message) {
    super(message);
    this._name = 'SuccessNotification';
  }
}

class InfoNotification extends Notification {
  constructor(message) {
    super(message);
    this._name = 'InfoNotification';
  }
}

class NormalNotification extends Notification {
  constructor(message) {
    super(message);
    this._name = 'NormalNotification';
  }
}

class WarningNotification extends Notification {
  constructor(message) {
    super(message);
    this._name = 'WarningNotification';
  }
}

class AlertNotification extends Notification {
  constructor(message) {
    super(message);
    this._name = 'AlertNotification';
  }
}

function getNotification(message) {
  return {
    getSuccessNotification() {
      return new SuccessNotification(message);
    },
    getInfoNotification() {
      return new InfoNotification(message);
    },
    getNormalNotification() {
      return new NormalNotification(message);
    },
    getWarningNotification() {
      return new WarningNotification(message);
    },
    getAlertNotification() {
      return new AlertNotification(message);
    },
  };
}

export {
  Notification,
  SuccessNotification,
  InfoNotification,
  NormalNotification,
  WarningNotification,
  AlertNotification,
  getNotification,
};
