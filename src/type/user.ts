
export enum UserActionType {
  FETCH_USERS = "FETCH_uSERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// ====================

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// ====================

interface FetchUserAction {
  type: UserActionType.FETCH_USERS;
}
interface FetchUserSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

export type ActionType = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

// =====================