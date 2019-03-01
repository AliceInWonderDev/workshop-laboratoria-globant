import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from '../views/posts/';

const App = () => <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Posts} />
    </Switch>
</BrowserRouter>

export default App;