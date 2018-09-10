import { combineReducers } from 'redux';
import GoalReducer from './GoalReducer/GoalReducer';
// import authReducer from '../auth/authDuck';
console.log(GoalReducer); 
export default combineReducers({
  goal: GoalReducer,
});
