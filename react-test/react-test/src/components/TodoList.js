import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import Todo from './Todo';
import RemoveTodo from '../containers/RemoveTodo'

const TodoList = ({ todos, toggleTodo }) => (
  <ListGroup style={{ marginTop: 10, marginBottom: 10 }}>
    {todos.map(todo =>
      <div>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
        <RemoveTodo
          id={todo.id}
        />
      </div>
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
