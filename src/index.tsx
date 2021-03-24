import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import './assets/styles';
import store from './store';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <StrictMode>
            <Router>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </StrictMode>
    </Provider>,
    document.getElementById('root')
);
