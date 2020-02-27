import { call, put, delay, take, race } from 'redux-saga/effects';
import { fetchSuggestionsSucceeded } from '../actions';

const getSuggestionsResponseForWord = async word => {
	return await fetch(`https://api.datamuse.com/sug?s=${word}`).then(
		response => {
			return response.json();
		}
	);
};

function* fetchSuggestions(word) {
	yield delay(500);

	const response = yield call(getSuggestionsResponseForWord, word);
	yield put(fetchSuggestionsSucceeded(response));
}

function* fetchSuggestionsSaga() {
	while (true) {
		const { payload } = yield take('FETCH_SUGGESTIONS');
		yield race({
			task: call(fetchSuggestions, payload),
			cancel: take('RESET_SUGGESTIONS')
		});
	}
}

export default fetchSuggestionsSaga;
