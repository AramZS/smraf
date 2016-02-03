import {setEntries, INITIAL_STATE} from './core';
import {Map, fromJS} from 'immutable';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_URL':
        return setURL(state, action.urlToTest);

    case 'SET_DATA':
        return setData(state, action.dataBits);
  }
  return state;
}
