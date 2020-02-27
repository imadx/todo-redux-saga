import React from 'react';
import { connect } from 'react-redux'

const ViewTodo = ({ todoItems }) => {
  const todoItemsList = todoItems.map(item => {
    return <li key={item.id}>{item.content}</li>
  })
  return <div className="todo-list">
    <ul>
      {todoItemsList}
    </ul>
  </div>
}

const mapStateToProps = (state) => {
  console.log('TCL: mapStateToProps -> state', state)
  return { todoItems: state.todoItems }
}

export default connect(mapStateToProps)(ViewTodo);