import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginBottom: 25,
    },
    actions: {
        display: 'flex',
    },
    spacing: {
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const NewPostComponent = ({ classes }) => <Grid item md={6} className={classes.spacing}>
    <Card className={classes.root}>
        <CardHeader
            title="Crear nuevo post"
        />
        <CardContent>

        </CardContent>

        <CardActions className={classes.actions}>
            <Button>
                Crear
            </Button>
        </CardActions>
    </Card>
</Grid>

export default withStyles(styles)(NewPostComponent);
