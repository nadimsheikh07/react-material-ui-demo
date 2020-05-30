import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from 'react-redux';
import { modalActions } from '../../_actions';

class MuiModal extends React.Component {
    handleClose = () => {
        this.props.closeModal();
    }

    render() {
        const { open, width, height } = this.props

        const customContentStyle = {
            width: `${width}px`,
            maxWidth: `${width}px`,
            height: `${height}px`,
            maxHeight: `${height}px`,
        };

        return (

            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {this.props.modal.title && <DialogTitle id="alert-dialog-title">{this.props.modal.title}</DialogTitle>}
                <DialogContent style={customContentStyle}>
                    {this.props.modal.component}
                </DialogContent>
            </Dialog>
        )
    }
}


const mapStateToProps = (state) => {
    const { modal } = state;
    return { modal };
}
const actionCreators = {
    closeModal: modalActions.close,
}

export default connect(mapStateToProps, actionCreators)((MuiModal));
