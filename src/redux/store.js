import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';


export const store = createStore(rootReducer, composeWithDevTools());
export const persisStore = persistStore(store);

const data = {store, persisStore}

export default data