import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function SimpleSnackbar(props) {

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.open}
            autoHideDuration={6000}
            onClose={() => props.handleClose()}
        >
            <Alert onClose={() => props.handleClose()} severity={props.type}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}