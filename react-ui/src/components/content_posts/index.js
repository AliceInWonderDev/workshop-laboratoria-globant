import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Post from '../../components/post/';

const styles = theme => ({
    spacing: {
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
    }
});

class ContentPosts extends React.Component {
    constructor(props) {
        super(props);
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
        const { classes } = this.props;
        return(
            <Grid item md={6} className={classes.spacing}>
                { this.handleRenderPostCard() }
            </Grid>
        );
    }
};

export default withStyles(styles)(ContentPosts);
