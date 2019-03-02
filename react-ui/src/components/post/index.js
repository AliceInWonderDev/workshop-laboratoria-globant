import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const CardCategory = ({ post }) => {
    console.log(post);
    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" >
                        {post.author.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={post.title}
                subheader={post.timestamp}
            />
            <CardContent>
                <Typography component="p">
                    { post.body }
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Dislike</Button>
            </CardActions>
        </Card>);
}
export default CardCategory;
