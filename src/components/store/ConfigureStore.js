import {combineReducers, createStore} from 'redux';
import expensesReducer from '../reducer/Essay';


const configureStore = () => {
    return createStore(
        combineReducers({
            essay: expensesReducer,

        })
    );
};


export default configureStore;