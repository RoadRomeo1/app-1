import {createStore} from 'redux';
import reducer from '../reducer/redcuerForBug';

const store = createStore(reducer);

export default store;