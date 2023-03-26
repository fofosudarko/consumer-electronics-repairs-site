// storage.js

import * as keys from './keys';

function saveReduxState(state) {
  localStorage.setItem(
    keys.REPLUGG_ELECTRONICS_REDUX_STATE,
    JSON.stringify(state)
  );
}

function getReduxState() {
  const serializedState = localStorage.getItem(
    keys.REPLUGG_ELECTRONICS_REDUX_STATE
  );

  return serializedState === undefined || serializedState === null
    ? undefined
    : JSON.parse(serializedState);
}

export { saveReduxState, getReduxState };
