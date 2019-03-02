import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { ThumbUp, ThumbDown, Comment, ExpandMore, MoreVert } from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
import classnames from 'classnames';

import prettyDate from '../../helpers/date_format';
import getAllFirstLetter from '../../helpers/string_format';

const styles = theme => ({
    root: {
        marginBottom: 25,
    },
    actions: {
        display: 'flex',
    },
    toRight: {
        marginLeft: 'auto',
    },
    likesNumber: {
        color: grey[600],
        marginLeft: 5,
        marginRight: 5,
    },
    commentStyle: {
        position: "relative",
        top: 8,
        color: grey[600],
    },
    commentsNumber: {
        color: grey[600],
        marginLeft: 5,
        marginRight: 8,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Post extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        }
    }

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        const { classes, post } = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {getAllFirstLetter(post.author)}
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    }
                    title={post.title}
                    subheader={prettyDate(post.timestamp)}
                />

                <CardContent>
                    <Typography component="p">
                        { post.body }
                    </Typography>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Like post">
                        <ThumbUp />
                    </IconButton>
                    <span className={classes.likesNumber}>
                        {post.voteScore}
                    </span>
                    <IconButton aria-label="Dislike post">
                        <ThumbDown />
                    </IconButton>

                    <div className={classes.toRight} onClick={this.handleExpandClick}>
                        <span className={classes.commentStyle}>
                            <Comment />
                        </span>
                        <span className={classes.commentsNumber}>0</span>
                        <IconButton
                            className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded,})}
                            aria-expanded={this.state.expanded}
                            aria-label="Show comments">
                            <ExpandMore />
                        </IconButton>
                    </div>
                </CardActions>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent />
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(Post);
