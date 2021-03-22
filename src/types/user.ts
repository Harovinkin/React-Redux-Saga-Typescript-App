export interface userState {
  users: any [];
  loading: boolean;
  error: null | string;
}

export enum userActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
  type: userActionTypes.FETCH_USERS;
}

interface FetchUserCuccessAction {
  type: userActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorAction {
  type: userActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FetchUserAction | FetchUserCuccessAction | FetchUserErrorAction