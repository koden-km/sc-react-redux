import * as actionTypes from '../constants/actionTypes';

const initialState = {
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER:
            return setUserReducer(state, action);
    }
    return state;
}

function setUserReducer(state, action) {
    const { user } = action.payload;
    return { ...state, user };
}
