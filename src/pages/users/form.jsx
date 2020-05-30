import React from 'react';
import MuiForm from '../../component/form'
import FormLayout from '../../theme/formLayout'

import { connect } from 'react-redux';
import { crudActions, fileActions, alertActions } from '../../_actions';

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Create user',
            submitText: 'Create',
            action: 'create',
            id: null,
            form: {
                role_id: '',
                name: '',
                mobile: '',
                email: '',
                image: '',
                dob: new Date(),
                workingDay: {
                    startDate: new Date(),
                    endDate: new Date(),
                },
            },
        }
    }

    createForm = () => {
        const { form } = this.state
        let formFields = []

        formFields.push({
            name: 'role_id',
            label: 'Role',
            type: 'autocomplete',
            icon: '',
            value: form.role_id,
            url: 'roles',
            getOptionLabel: 'name',
            validation: 'required',
        })

        formFields.push({
            name: 'name',
            label: 'Name',
            type: 'text',
            icon: 'person',
            value: form.name,
            validation: 'required',
        })

        formFields.push({
            name: 'mobile',
            label: 'mobile',
            type: 'text',
            icon: 'call',
            value: form.mobile,
            validation: 'required',
        })

        formFields.push({
            name: 'image',
            label: 'profile',
            type: 'file',
            icon: 'cloud_upload',
            value: form.image,
            validation: null,
            editable: true,
            accept: 'image/*',
        })

        formFields.push({
            name: 'email',
            label: 'Email',
            type: 'email',
            icon: 'mail',
            value: form.email,
            validation: 'required|email',
        })
        formFields.push({
            name: 'dob',
            label: 'Dob',
            type: 'date',
            variant: 'inline',
            format: 'DD-MM-YYYY',
            value: form.dob,
            validation: 'required',
        })
        formFields.push({
            name: 'workingDay',
            label: 'Working Day',
            type: 'daterange',
            format: 'DD-MM-YYYY',
            value: form.workingDay,
            validation: 'required',
        })

        return formFields
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id && id !== 'new') {
            this.props.getData('form', 'users', id)
        }
    }

    static getDerivedStateFromProps(props, state) {
        let newState = {};
        if (props.match.params.id !== 'new' && props.form !== null) {
            newState.id = props.match.params.id
            newState.title = 'Edit User'
            newState.submitText = 'Edit'
            newState.action = 'update'
            newState.form = props.form
            newState.form.workingDay = {
                startDate: new Date(),
                endDate: new Date(),
            }
        } else {
            newState.form = state.form
        }

        if (props.fileUpload !== null) {
            newState.form.image = props.fileUpload.result
            props.clearUpload();
        }

        if (props.formSubmit) {
            props.history.push('/users')
        }

        return newState
    }

    handleChange = (value, name) => {
        const { form } = this.state
        form[name] = value
        this.setState(form)
    }

    fileUpload = (file) => {
        this.props.upload(file, 'image')
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { action, id, form } = this.state
        if (form) {
            const formData = {
                role_id: form.role_id,
                name: form.name,
                mobile: form.mobile,
                email: form.email,
                dob: form.dob,
                image: form.image,
            }
            if (action === 'update') {
                this.props.updateData('form', 'users', id, formData)
            } else {
                this.props.createData('form', 'users', formData)
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
                    fileUpload={this.fileUpload}
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
    const { form, formSubmit, fileUpload } = state;
    return {
        form,
        formSubmit,
        fileUpload
    };
}

const actionCreators = {
    getData: crudActions._get,
    getAll: crudActions._getAll,
    showError: alertActions.error,
    createData: crudActions._create,
    updateData: crudActions._update,
    upload: fileActions._upload,
    clearUpload: fileActions._clear,
};

export default connect(mapState, actionCreators)(Form);
