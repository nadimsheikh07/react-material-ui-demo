import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
    paper: {
        margin: theme.spacing(8, 5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
class FormLayout extends React.Component {
    render() {
        const { classes, title, fullWidth } = this.props

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <CssBaseline />
                <Grid item xs={12} sm={12} md={fullWidth ? 12 : 6} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            {title}
                        </Typography>
                        {this.props.children}
                    </div>
                </Grid>
            </Grid>
        );
    }
}


export default withStyles(styles)(FormLayout);
