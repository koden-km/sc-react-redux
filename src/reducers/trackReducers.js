import * as actionTypes from '../constants/actionTypes';

const initialState = {
    tracks: [],
    activeTrack: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TRACKS_SET:
            return setTracksReducer(state, action);
        case actionTypes.TRACK_PLAY:
            return setPlayReducer(state, action);
    }
    return state;
}

function setTracksReducer(state, action) {
    const { tracks } = action.payload;
    return { ...state, tracks };
}

function setPlayReducer(state, action) {
    const { track } = action.payload;
    return { ...state, activeTrack: track };
}
