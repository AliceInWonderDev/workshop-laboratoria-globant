import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = theme => ({
    toRight: {
        position: "absolute",
        bottom: 50,
        right: 50,
    },
    margin: {
        margin: theme.spacing.unit,
    },
});


const BottonTo = ({ classes, path }) => <Link to={path}>
    <Fab color="secondary" aria-label="Add" className={[classes.margin, classes.toRight]}>
        <AddIcon />
    </Fab>
</Link>;

export default withStyles(styles)(BottonTo);
