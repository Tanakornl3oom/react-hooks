import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RoutesType } from './RoutesInterface';

import Home from './Modules/Home/Home';
import UseRef from './Modules/UseRef/UseRef';
import UseState from './Modules/UseState/UseState';
import UseEffect from './Modules/UseEffect/UseEffect';

function App() {
    const routes: Array<RoutesType> = [
        {
            path: '/home',
            name: 'Home',
        },
        {
            path: '/use-state',
            name: 'UseState Recat Hooks',
        },
        {
            path: '/use-effect',
            name: 'UseEffect Recat Hooks',
        },
        {
            path: '/use-ref',
            name: 'UseRef Recat Hooks',
        },
    ];

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {routes.map((route, index) => {
                            return (
                                <li key={index}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/use-ref" component={UseRef} />
                    <Route exact path="/use-state" component={UseState} />
                    <Route exact path="/use-effect" component={UseEffect} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
