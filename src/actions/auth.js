import SC from 'soundcloud';

export function auth() {
    SC.connect()
    .then((session) => {
        // console.log('Debug: src/actions/auth.js - auth()');
        console.log(session);
        fetchMe(session);
    });
};

function fetchMe(session) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    .then((response) => response.json())
    .then((data) => {
        // console.log('Debug: src/actions/auth.js - fetchMe()');
        console.log(data);
    });
}
