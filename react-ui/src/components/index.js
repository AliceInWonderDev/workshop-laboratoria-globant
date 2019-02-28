import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from './categories_components/';

const App = () => <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Categories} />
    </Switch>
</BrowserRouter>

export default App;