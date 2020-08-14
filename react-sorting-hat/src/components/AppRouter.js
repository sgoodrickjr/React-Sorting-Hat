import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
import Home from './Home';
import Character from './Character';
import Sorting from './Sorting';
import Spells from './Spells';

function AppRouter() {
    return (
        <Router>
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Sorting</Link>
                        </li>
                        <li>
                            <Link to="/">Characters</Link>
                        </li>
                        <li>
                            <Link to="/">Spells</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/sorting" component={Sorting} />
                    <Route path="/character" component={Character} />
                    <Route path="/spells" component={Spells} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;