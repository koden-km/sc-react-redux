import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import SC from 'soundcloud';
import configureStore from './stores/configureStore';
import App from './components/App/App';
import Callback from './components/Callback/Callback';
import { Stream } from './components/Stream/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/authConstants';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

// TODO: doesn't this need to set the initial state?
const store = configureStore();

// TODO: trying to setup store with initial state...

// const store = configureStore({});

// const initialState = {
//     auth: {},
//     track: {}
// };
// const store = configureStore(initialState);

// const initialState = {
//     // authReducers: {},
//     // trackReducers: {}
// };
// const store = configureStore(initialState);

// END...

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Stream} />
                <Route path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
