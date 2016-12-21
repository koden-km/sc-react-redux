// Temp hax until i get an API CLIENT_ID and can use the real import below.
// import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';
import { setTracksAction } from '../actions/trackActions';

function setUserAction(user) {
    return {
        type: actionTypes.SET_USER,
        payload: { user }
    };
}

export function authAction() {
    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    return {
        type: actionTypes.AUTH,
        payload: (dispatch) => {
            console.log('Debug: src/actions/authActions.js - auth()');
            const session = {};
            dispatch(fetchUserAction(session));
            dispatch(fetchStreamAction(session));
        }
    }

    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    // return function (dispatch) {
    //     // console.log('Debug: src/actions/authActions.js - auth()');
    //     const session = {};
    //     dispatch(fetchUserAction(session));
    //     dispatch(fetchStreamAction(session));
    // };

    // return function (dispatch) {
    //     SC.connect()
    //         .then((session) => {
    //             dispatch(fetchUserAction(session));
    //             dispatch(fetchStreamAction(session));
    //         })
    //     ;
    // };
}

function fetchUserAction(session) {
    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    return {
        type: actionTypes.FETCH_USER,
        payload: (dispatch) => {
            // console.log('Debug: src/actions/authActions.js - fetchUserAction()');
            dispatch(setUserAction({username: 'placeholder-username'}));
        }
    }

    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    // return function (dispatch) {
    //     // console.log('Debug: src/actions/authActions.js - fetchUserAction()');
    //     dispatch(setUserAction({username: 'placeholder-username'}));
    // }

    // return function (dispatch) {
    //     fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             dispatch(setUserAction(data));
    //         })
    //     ;
    // }
}

function fetchStreamAction(session) {
    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    return {
        type: actionTypes.FETCH_STREAM,
        payload: (dispatch) => {
            // console.log('Debug: src/actions/authActions.js - fetchStreamAction()');
            const data = {
                collection: [
                    {
                        origin: {
                            title: 'Some track',
                            stream_url: 'some-url/some-track'
                        }
                    },
                    {
                        origin: {
                            title: 'Some other track',
                            stream_url: 'some-url/some-other-track'
                        }
                    }
                ]
            }
            dispatch(setTracksAction(data.collection));
        }
    }

    // Temp hax until i get an API CLIENT_ID and can use the real function below.
    // return function (dispatch) {
    //     // console.log('Debug: src/actions/authActions.js - fetchStreamAction()');
    //     const data = {
    //         collection: [
    //             {
    //                 origin: {
    //                     title: 'Some track',
    //                     stream_url: 'some-url/some-track'
    //                 }
    //             },
    //             {
    //                 origin: {
    //                     title: 'Some other track',
    //                     stream_url: 'some-url/some-other-track'
    //                 }
    //             }
    //         ]
    //     }
    //     dispatch(setTracksAction(data.collection));
    // }

    // return function (dispatch) {
    //     fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             dispatch(setTracksAction(data.collection));
    //         })
    //     ;
    // }
}
