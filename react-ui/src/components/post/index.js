import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardCategory = props => {
    return(<Card>
        <CardContent>
            <Typography variant="h5" component="h2">
                Título del contenido
            </Typography>
            
            <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Like</Button>
            <Button size="small">Dislike</Button>
        </CardActions>
    </Card>);
}
export default CardCategory;