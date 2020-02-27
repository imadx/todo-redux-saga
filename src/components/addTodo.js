import React, { useState, useMemo } from 'react';
import { connect } from "react-redux";
import { addTodo, fetchSuggestions, resetSuggestions } from '../pages/list/store/actions'

const AddTodo = ({ addTodo, fetchSuggestions, resetSuggestions, suggestions }) => {
  const [todoItemContent, setTodoItemContent] = useState('');

  const handleOnTodoItemContentChange = (e) => {
    const content = e.target.value;
    setTodoItemContent(content)
    if (content.length === 0) {
      resetSuggestions()
    } else {
      fetchSuggestions(content);
    }
  };

  const handleAddTodoClick = (e) => {
    e.preventDefault()
    if (todoItemContent.length === 0) { return };
    addTodo(todoItemContent);
    setTodoItemContent('')
    resetSuggestions();
  }


  const suggestionItems = useMemo(() => {
    const handleSuggestionClick = (e) => {
      setTodoItemContent(e.target.dataset.word);
      resetSuggestions()
    }

    return suggestions.map(
      item => <li key={item.word}
        onClick={handleSuggestionClick}
        data-word={item.word}>
        {item.word}
      </li>
    )
  }, [suggestions, resetSuggestions])

  return <div className="todo-add" >
    <form onSubmit={handleAddTodoClick}>
      <input type="text" value={todoItemContent} onChange={handleOnTodoItemContentChange} />
      <button type="submit">ADD ITEM</button>
    </form>
    {suggestions.length !== 0 && <div className="suggestions-wrapper">
      <ul className="suggestions">
        {suggestionItems}
      </ul>
    </div>}
  </div >
}

const matchStateToProp = ({ suggestions }) => {
  return {
    suggestions
  }
}

export default connect(matchStateToProp, {
  addTodo,
  fetchSuggestions,
  resetSuggestions,
})(AddTodo);