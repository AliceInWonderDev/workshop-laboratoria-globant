import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import prettyDate from '../../helpers/date_format';
import getAllFirstLetter from '../../helpers/string_format';

const CardCategory = ({ post }) => {
    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" >
                        {getAllFirstLetter(post.author)}
                    </Avatar>
                }
                title={post.title}
                subheader={prettyDate(post.timestamp)}
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
