import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions'
import { Button } from 'reactstrap';

const RemoveTodo = ({id, dispatch}) => {
  return (
    <div>
      <Button onClick = {e => {
        e.preventDefault()
        dispatch(deleteTodo(id))
      }}> delete</Button>
    </div>
  )
}

export default connect()(RemoveTodo)
