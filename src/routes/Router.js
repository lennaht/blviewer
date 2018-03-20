import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './Test';
import Home from './Home';
import NavBar from '../components/Navbar';

const Router = () => (
    <Fragment>
        <NavBar />
        <Route exact path={'/'} component={Home}/>
        <Switch>
            <Route path={'/test'} component={Test}/>
        </Switch>
    </Fragment>
);

export default Router;