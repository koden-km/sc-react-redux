import * as actionTypes from '../constants/actionTypes';

export function setTracksAction(tracks) {
    return {
        type: actionTypes.TRACKS_SET,
        payload: { tracks }
    };
};

export function playTrackAction(track) {
    return {
        type: actionTypes.TRACK_PLAY,
        payload: { track }
    };
}
