import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { appTitle } from '../theme/constant';


class Copyright extends React.Component {

    showCurrentYear = () => {
        return new Date().getFullYear();
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="body2" color="textSecondary" align="center">
                    All rights reserved
                    {' '}<Link color="inherit" href="#">{appTitle}</Link>{' '}
                    &copy; {this.showCurrentYear()}
                </Typography>
            </React.Fragment>
        )

    }
}

export default Copyright;