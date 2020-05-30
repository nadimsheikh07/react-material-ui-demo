import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { userService } from '../_services';

const styles = () => ({
    loginWrapper: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    facebookWrapper: {
        textAlign: 'right',
    },
    googleWrapper: {
        textAlign: 'left',
    }
})

class Login extends React.Component {

    componentWillMount() {
        userService.firebaseCheckAuth()
    }

    login = (type) => {
        userService.firebaseLogin(type)
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={3} className={classes.loginWrapper}>
                <Grid item xs={6} className={classes.facebookWrapper}>
                    <Button variant="contained" color="primary" onClick={() => this.login('facebook')}>
                        Sign in with Facebook
                        </Button>
                </Grid>
                <Grid item xs={6} className={classes.googleWrapper} >
                    <Button variant="contained" color="secondary" onClick={() => this.login('google')}>
                        Sign in with Google
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Login)