import {combineReducers, createStore} from 'redux';
import expensesReducer from '../reducer/Essay';


const configureStore = () => {
    return createStore(
        combineReducers({
            essay: expensesReducer,

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};


export default configureStore;