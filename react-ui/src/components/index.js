import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from '../views/posts/';
import NewPost from '../views/new_post';

const App = () => <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
    </Switch>
</BrowserRouter>

export default App;
