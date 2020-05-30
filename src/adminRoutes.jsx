import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from './theme/layout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from './pages/dashboard';

import UserList from './pages/users';
import UserForm from './pages/users/form';
import TaskList from './pages/tasks';
import TaskForm from './pages/tasks/form';
import TaskCalender from './pages/tasks/calender';
import PermissionList from './pages/permissions';
import PermissionForm from './pages/permissions/form';
import RoleList from './pages/roles';
import RoleForm from './pages/roles/form';

class AdminRoutes extends React.Component {
    constructor(props) {
        super(props)

        if (!this.props.loggedIn) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/dashboard' exact component={Dashboard} />
                    <Route path='/users' component={UserList} />
                    <Route path='/user-form/:id' component={UserForm} />
                    <Route path='/tasks' component={TaskList} />
                    <Route path='/task-calender' component={TaskCalender} />
                    <Route path='/task-form/:id' component={TaskForm} />
                    <Route path='/roles' component={RoleList} />
                    <Route path='/role-form/:id' component={RoleForm} />
                    <Route path='/permissions' component={PermissionList} />
                    <Route path='/permission-form/:id' component={PermissionForm} />
                </Switch>
            </Layout>
        )
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

export default withRouter(connect(mapState, null)(AdminRoutes));
