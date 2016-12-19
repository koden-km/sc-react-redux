import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';

function setMe(user) {
    return {
        type: actionTypes.ME_SET,
        user
    };
}

export function auth() {
    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    return function (dispatch) {
        // console.log('Debug: src/actions/auth.js - auth()');
        dispatch(fetchMe({}));
    };

    // return function (dispatch) {
    //     SC.connect()
    //     .then((session) => {
    //         dispatch(fetchMe(session));
    //     });
    // };
};

function fetchMe(session) {
    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    return function (dispatch) {
        // console.log('Debug: src/actions/auth.js - fetchMe()');
        dispatch(setMe({username: 'placeholder-username'}));
    };

    // return function (dispatch) {
    //     fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         dispatch(setMe(data));
    //     });
    // };
}
