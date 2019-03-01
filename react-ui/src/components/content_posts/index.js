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

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:3001/posts/", {
                method: 'GET',
                headers:{
                    "Authorization": "whatever-you-want",
                    "content-type" : "application/json"
                }
            });
            const json = await response.json();
            
            this.setState({
                posts: json,
            });
        } catch(err) {
            console.error('Error:', err);
        }
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