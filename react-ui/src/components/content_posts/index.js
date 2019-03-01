import React from 'react';
import Grid from '@material-ui/core/Grid';

import Post from '../../components/post/';


class ContentPosts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
        this.handleRenderPostCard = this.handleRenderPostCard.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts/", {
            method: 'GET',
            headers:{
                "Authorization": "whatever-you-want",
                "content-type" : "application/json"
            }
        }).then(res => res.json())
        .then(response => {
            this.setState({
                posts: response,
            });
        })
        .catch(error => console.error('Error:', error));
    }

    handleRenderPostCard() {
        return(
            this.state.posts.map(post => <Post key={post.id} post={post} />)
        );
    }

    render() {
        return(
            <Grid item md={8}>
                { this.handleRenderPostCard() }
            </Grid>
        );
    }
};

export default ContentPosts;