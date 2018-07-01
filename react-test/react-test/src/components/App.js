import React from 'react';
import AddTodo from '../containers/AddTodo'
import { Container } from 'reactstrap';
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Container>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Container>
  </div>
)

export default App;
