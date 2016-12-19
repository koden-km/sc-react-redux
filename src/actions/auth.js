import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from '../actions/track';

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
        const session = {};
        dispatch(fetchMe(session));
        dispatch(fetchStream(session));
    };

    // return function (dispatch) {
    //     SC.connect()
    //         .then((session) => {
    //             dispatch(fetchMe(session));
    //             dispatch(fetchStream(session));
    //         })
    //     ;
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
    //         .then((response) => response.json())
    //         .then((data) => {
    //             dispatch(setMe(data));
    //         })
    //     ;
    // };
}

function fetchStream(session) {
    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    return function (dispatch) {
        // console.log('Debug: src/actions/auth.js - fetchStream()');
        const data = {
            collection: [
                {
                    origin: {
                        title: 'Some track'
                    }
                },
                {
                    origin: {
                        title: 'Some other track'
                    }
                }
            ]
        }
        dispatch(setTracks(data.collection));
    }

    // return function (dispatch) {
    //     fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             dispatch(setTracks(data.collection));
    //         })
    //     ;
    // };
}
