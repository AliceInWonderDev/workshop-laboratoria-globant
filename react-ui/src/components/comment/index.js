import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ThumbUp, ThumbDown } from '@material-ui/icons/';
import prettyDate from '../../helpers/date_format';
import getAllFirstLetter from '../../helpers/string_format';

const styles = theme => ({
    root: {
        paddingLeft: 30,
        paddingRight: 30,
    },
});

class CommentComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.comment.voteScore,
        };
    }

    handleAddLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    }

    handleAddDislike = () => {
        this.setState({
            likes: this.state.likes - 1,
        })
    }

    render() {
        const { classes, comment } = this.props;
        return(
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe">
                            {getAllFirstLetter(comment.author)}
                        </Avatar>
                    }
                    title={`Escrito por: ${comment.author}`}
                    subheader={prettyDate(comment.timestamp)}
                />
                <CardContent>
                    { comment.body }
                </CardContent>

                <CardActions disableActionSpacing>
                    <IconButton aria-label="Like comment" onClick={this.handleAddLikes}>
                        <ThumbUp />
                    </IconButton>
                    <span>
                        {this.state.likes}
                    </span>
                    <IconButton aria-label="Dislike comment" onClick={this.handleAddDislike}>
                        <ThumbDown />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(CommentComponent);
