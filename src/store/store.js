import {createStore} from 'redux';
import reducer from '../utils/reducer';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function makeStore() {
  return createStore(reducer);
}
