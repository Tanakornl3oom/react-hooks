import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Modules/Home/Home';
import UseRef from './Modules/UseRef/UseRef';

function App() {
    const routes = [
        {
            path: '/home',
            name: 'Home',
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
                        {routes.map(route => {
                            return (
                                <li>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/use-ref" component={UseRef} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
