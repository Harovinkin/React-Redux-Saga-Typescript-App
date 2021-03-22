import { UsersAction, UsersActionType, UsersState } from "../../types/users"

const defaultState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

export const usersReducer = (state = defaultState, action: UsersAction): UsersState => {
  switch (action.type) {
      case UsersActionType.FETCH_USERS:
        return {loading: true, error: null, users: []}
      case UsersActionType.FETCH_USERS_SUCCESS:
        return {loading: false, error: null, users: action.payload}
      case UsersActionType.FETCH_USERS_ERROR:
          return {loading: false, error: action.payload, users: []}
    default:
      return state
  }
}