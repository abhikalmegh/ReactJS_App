import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import ProductDetails from './components/productDetail';
import PageNotFound from './components/404';

const Routers = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <Route path="/productDetail/:prodId" component={ProductDetails} />
            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routers;