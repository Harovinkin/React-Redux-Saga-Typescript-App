import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
const {todos, loading, error, limit, page} = useTypedSelector(state => state.todo);

const {fetchTodos, setTodoPage} = useActions();

const pages = [1, 2, 3, 4, 5]

useEffect(() => {
  fetchTodos(page, limit)
}, [page])

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
      {todos.map(todo => (
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      ))}
      <div style={{display: 'flex'}}>
        {pages.map(p => (
          <div onClick={() => setTodoPage(p)} key={p} style={{border: p === page ? '2px solid green' : '1px solid grey', padding: '10px', cursor: 'pointer'}}>{p}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;