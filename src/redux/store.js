import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pokeReducer from './pokeDucks';
import userReducer, {readActiveUser} from './userDucks';


const rootReducer = combineReducers({
    pokemons: pokeReducer,
    user: userReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    readActiveUser()(store.dispatch)
    return store
}

