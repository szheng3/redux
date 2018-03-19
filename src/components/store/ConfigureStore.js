import {combineReducers, createStore} from 'redux';
import expensesReducer from '../reducer/Essay';


const configureStore = () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,

        })
    );
};


export default configureStore;