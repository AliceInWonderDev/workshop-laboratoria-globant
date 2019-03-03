import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Categories from '../categories';

const styles = theme => ({
    centerContent: {
        marginLeft: "auto",
        marginRight: "auto",
    }
});

const Navbar = ({ classes }) => <React.Fragment>
    <AppBar position="static" color="default">
        <Toolbar className={classes.centerContent}>
            <Typography variant="h6" color="inherit">
                Workshop de React y Redux - Globant Chile / Laboratoria
            </Typography>
        </Toolbar>
        <Toolbar className={classes.centerContent}>
            <Categories />
        </Toolbar>
    </AppBar>
</React.Fragment>


export default withStyles(styles)(Navbar);
