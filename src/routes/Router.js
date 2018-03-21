import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes and Components
import Test from './Test';
import Home from './Home';
import NavBar from '../components/Navbar';

// Styles
import Container from '../styles/Layout';

const Router = () => (
    <Fragment>
        <NavBar />
        <Container>
            <Route exact path={'/'} component={Home}/>
            <Switch>
                <Route path={'/test'} component={Test}/>
            </Switch>
        </Container>
    </Fragment>
);

export default Router;