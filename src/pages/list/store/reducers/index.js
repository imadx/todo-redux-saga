import { combineReducers } from 'redux';
let todoId = 0;

const initialState = {
	todoItems: [{ id: -1, content: 'Hello there', isPending: true }],
	suggestions: []
};

const todoReducer = (state = initialState.todoItems, action = {}) => {
	switch (action.type) {
		case 'ADD_TODO':
			const newTodoItem = {
				id: todoId++,
				content: action.payload,
				isPending: true
			};
			return [...state, newTodoItem];
		default:
			return state;
	}
};

const suggestionsReducer = (state = initialState.suggestions, action = {}) => {
	switch (action.type) {
		case 'FETCH_SUGGESTIONS_SUCCEEDED':
			const newSuggestions = action.payload;
			return newSuggestions;
		case 'RESET_SUGGESTIONS':
			return [];
		default:
			return state;
	}
};

export default combineReducers({
	todoItems: todoReducer,
	suggestions: suggestionsReducer
});
