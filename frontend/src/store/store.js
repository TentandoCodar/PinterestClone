import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const INITIAL_STATE = {
    data: [],
}

const sagaMiddleware = createSagaMiddleware();

function login(state = [], action) {
    switch(action.type) {
        case 'LOGIN':
            return {...state, data: action.user};
        default:
            return state;
    }
}

function pictures(state = INITIAL_STATE, action) {
    switch( action.type ) {
        case 'START':
            return {...state, data: action.pictures};
        default:
            return state;
    }
}

function profile(state = [], action) {
    switch(action.type) {
        case "GET":
            return {...state, data: action.user};
        default:
            return state;
    }
}

function imageForm(state = true, action) {
    switch(action.type) {
        case "CHANGE":
            return {...state, data: !state.data};
        default:
            return state;
    }   
}







const store = createStore(combineReducers({
    pictures,
    login,
    profile,
    imageForm
}), applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
