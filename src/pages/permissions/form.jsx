import React from 'react';
import MuiForm from '../../component/form'
import FormLayout from '../../theme/formLayout'

import { connect } from 'react-redux';
import { crudActions, alertActions } from '../../_actions';

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Create permission',
            submitText: 'Create',
            action: 'create',
            id: null,
            form: {
                code: '',
                details: ''
            }
        }
    }

    createForm = () => {
        const { form } = this.state
        let formFields = []
        formFields.push({
            name: 'code',
            label: 'Code',
            type: 'text',
            icon: '',
            value: form.code,
            validation: 'required',
        })

        formFields.push({
            name: 'details',
            label: 'Details',
            type: 'text',
            value: form.details,
            validation: null,
        })

        return formFields
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id && id !== 'new') {
            this.props.getData('form', 'permissions', id)
        }
    }

    static getDerivedStateFromProps(props) {
        let newState = {};

        if (props.match.params.id !== 'new' && props.form !== null) {
            newState.id = props.match.params.id
            newState.title = 'Edit Permission'
            newState.submitText = 'Edit'
            newState.action = 'update'
            newState.form = props.form
        }

        if (props.formSubmit) {
            props.history.push('/permissions')
        }

        return newState
    }

    handleChange = (value, name) => {
        const { form } = this.state
        form[name] = value
        this.setState(form)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { action, id, form } = this.state
        if (form) {
            const formData = {
                code: form.code,
                details: form.details,
            }
            if (action === 'update') {
                this.props.updateData('form', 'permissions', id, formData)
            } else {
                this.props.createData('form', 'permissions', formData)
            }
        }
    }

    render() {
        const { title, submitText } = this.state
        return (
            <FormLayout title={title} fullWidth={false}>
                <MuiForm
                    formFields={this.createForm()}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    submitText={submitText}
                    submitFullWidth={true}
                    fullWidth={true}
                    noValidate={false}
                />
            </FormLayout >
        );
    }
}

function mapState(state) {
    const { form, formSubmit } = state;
    return {
        form,
        formSubmit
    };
}

const actionCreators = {
    getData: crudActions._get,
    showError: alertActions.error,
    createData: crudActions._create,
    updateData: crudActions._update,
};

export default connect(mapState, actionCreators)(Form);
