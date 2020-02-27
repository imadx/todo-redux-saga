import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { fetchSuggestionsSucceeded } from '../actions';

const getSuggestionsResponseForWord = async word => {
	return await fetch(`https://api.datamuse.com/sug?s=${word}`).then(
		response => {
			return response.json();
		}
	);
};

function* fetchSuggestions(action) {
	yield delay(500);

	const response = yield call(getSuggestionsResponseForWord, action.payload);
	yield put(fetchSuggestionsSucceeded(response));
}

function* fetchSuggestionsSaga() {
	yield takeLatest('FETCH_SUGGESTIONS', fetchSuggestions);
}

export default fetchSuggestionsSaga;
