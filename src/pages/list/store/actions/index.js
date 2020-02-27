export const addTodo = content => {
	return {
		type: 'ADD_TODO',
		payload: content
	};
};

export const fetchSuggestions = content => {
	return {
		type: 'FETCH_SUGGESTIONS',
		payload: content
	};
};

export const resetSuggestions = () => {
	return {
		type: 'RESET_SUGGESTIONS',
	};
};

export const fetchSuggestionsSucceeded = suggestions => {
	return {
		type: 'FETCH_SUGGESTIONS_SUCCEEDED',
		payload: suggestions
	};
};
