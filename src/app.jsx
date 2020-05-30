import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import AdminRoutes from './adminRoutes';
import { connect } from 'react-redux';
import { loaderActions, confirmActions, alertActions } from './_actions';

import Loader from './component/alert/loader';
import AlertConfirmDialog from './component/alert/alertConfirmDialog';
import AlertMessage from './component/alert/alertMessage';
import Modal from './component/modal';
class App extends React.Component {

    componentDidMount() {
        this.props.clearAlerts();
        this.props.hideLoader();
    }

    render() {
        return (
            <React.Fragment>

                <Loader open={this.props.loader} />

                {this.props.modal.open && <Modal {...this.props.modal} />}

                {this.props.confirm.show &&
                    <AlertConfirmDialog
                        title={this.props.confirm.title}
                        text={this.props.confirm.text}
                        open={true}
                        handleConfirm={() => this.props.setConfirm(this.props.confirm.data)}
                        handleClose={() => this.props.clearConfirms()}
                    />
                }

                {this.props.alert && <AlertMessage
                    open={true}
                    type={this.props.alert.type}
                    message={this.props.alert.message}
                    handleClose={this.props.clearAlerts}
                />}

                <Router>
                    <Switch>
                        <Route path='/' exact component={Login} />
                        <AdminRoutes />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}


function mapState(state) {
    const { alert, loader, modal, confirm } = state;
    return { alert, loader, modal, confirm };
}

const actionCreators = {
    clearAlerts: alertActions.clear,
    clearConfirms: confirmActions.clear,
    setConfirm: confirmActions.confirm,
    showLoader: loaderActions.show,
    hideLoader: loaderActions.hide,
};

export default (connect(mapState, actionCreators)(App));
