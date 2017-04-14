import {combineReducers}  from 'redux'
import {reducer as formReducer} from 'redux-form'
import getCards from './editCards'
import getActive from './editNav'



const ToEditApp = combineReducers({
    activeNav: getActive,
    cards: getCards,
    form: formReducer
});
export default ToEditApp
