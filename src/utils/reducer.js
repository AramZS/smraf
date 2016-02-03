import {setEntries, next, vote, INITIAL_STATE} from './core';
import {Map, fromJS} from 'immutable';
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'NEXT':
    return next(state);
  case 'VOTE':
  	// http://facebook.github.io/immutable-js/docs/#/Map/update
	return state.update('vote',
					  voteState => vote(voteState, action.entry));
  }
  return state;
}
