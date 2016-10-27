// Application Entry Point
// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Redux
import nameApp from './Reducers/nameApp';
import DisplayNames from './Components/Contain/DisplayNames.jsx';

const store = createStore(nameApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Wow = () => <p>Wow</p>;

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={ DisplayNames } />
            <Route path='/wow' component={Wow} />
        </Router>
    </Provider>,
    document.getElementById('app')
);