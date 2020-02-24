import { UserActionType } from './user.action.type';

export const setCurrentUser = user => {
  return {
    type: UserActionType.SET_CURRENT_USER,
    payload: user
  };
};
