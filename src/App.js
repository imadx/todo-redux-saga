import React from 'react';
import './App.scss';

import store from './pages/list/store'
import { Provider } from 'react-redux';

import TodoList from './pages/list'


function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
