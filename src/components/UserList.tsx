import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/actions-creator/user';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useTypedSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading) {
    return (<h2>LOADING ...</h2>)
  }

  if (error) {
    return (<h2>{error}</h2>)
  }

  return (
    <div>
      {users.map(user => (<div key={user.id}>{user.name}</div>))}
    </div>
  );
};

export default UserList;