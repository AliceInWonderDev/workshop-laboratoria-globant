import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1,
    }
  };

const Navbar = () => <div>
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Workshop de React y Redux - Globant Chile / Laboratoria
            </Typography>
        </Toolbar>
    </AppBar>
</div>


export default withStyles(styles)(Navbar);
