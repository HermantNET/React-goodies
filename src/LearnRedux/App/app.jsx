// Application Entry Point
// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Redux
import nameApp from './Reducers/nameApp';

const store = createStore(nameApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Components
import DisplayNames from './Components/Contain/DisplayNames.jsx';
import NavBar from './Components/Present/NavBar.jsx';
const NotFound = () => <p>404 Page does not exist</p>;
const Cats = () => <p>Cats!!!!!!</p>;
const Dogs = () => <p>DOG-O</p>;
const Bananas = () => <p>Potassiyum ;)</p>;

render(
    <Provider store={store}>
        <Router history={browserHistory}>
                <Route path="/" component={NavBar}>
                    <IndexRoute component={DisplayNames} />
                    <Route path="Cats" component={Cats} />
                    <Route path="Dogs" component={Dogs} />
                    <Route path="Bananas" component={Bananas} />
                </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);