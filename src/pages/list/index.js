import React from 'react';

import AddTodo from '../../components/addTodo';
import FilterTodo from '../../components/filterTodo';
import ViewTodo from '../../components/viewTodo';

const List = () => {
	return (
		<div className='todo-app'>
			<h1>Todo Example</h1>
			<AddTodo />
			<FilterTodo />
			<ViewTodo />
		</div>
	);
};

export default List;
