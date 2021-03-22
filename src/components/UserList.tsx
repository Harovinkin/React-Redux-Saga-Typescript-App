import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return (
    <h2>loading...</h2>
    )
  }

  if (error) {
    return (
      <h2>FETCH ERROR</h2>
    )
  }

  return (
    <div>
      {users.map(user => (<div key={user.id}>{user.name}</div>))}
    </div>
  )
};

export default UserList;