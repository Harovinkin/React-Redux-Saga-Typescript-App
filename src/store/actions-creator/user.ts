import axios from "axios";
import { Dispatch } from "redux"
import { UsersAction, UsersActionType } from "../../types/users"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({type: UsersActionType.FETCH_USERS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({type: UsersActionType.FETCH_USERS_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: UsersActionType.FETCH_USERS_ERROR, payload: 'Fetch Error... :('})
    }
  }
}