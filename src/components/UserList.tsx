import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);
  console.log(users, loading, error)
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

export default UserList;