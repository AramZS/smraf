import {createStore} from 'redux';
import reducer from '../utils/reducer';

export default function makeStore() {
  return createStore(reducer);
}
