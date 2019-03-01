import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

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
            const response = await axios.get("http://localhost:3001/posts/", {
                headers: {
                    "Authorization": "whatever-you-want",
                    "content-type" : "application/json"
                }
            });
            this.setState({
                posts: await response.data,
            });
        } catch(err) {
            console.log(`Error: ${err}`);
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