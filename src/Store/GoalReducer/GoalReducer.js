import GoalActionCreator from './GoalActionCreator';
import ApiMock from './../../ApiMock/Mock';

const GET_GOAL_LIST = 'GET_GOAL_LIST';

const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case GET_GOAL_LIST:
            var a = [
                ...state,
                ...payload.goals,
            ];
            return a;

        default:
            return state;
    }
}

const setGoalList = (goalList) => {
    return {
        type: GET_GOAL_LIST,
        payload: goalList,
    }
}

export const getGoalList = () => {
    return dispatch => {
        ApiMock.getGoals().then((goals) => {
            console.log(goals, 'goal');
            dispatch(setGoalList({goals: goals}));
        });
    }
}
