import React from 'react';
import MuiForm from '../../component/form/stepper'

import { connect } from 'react-redux';
import { crudActions, alertActions, modalActions, fileActions } from '../../_actions';

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Create task',
            submitText: 'Create',
            action: 'create',
            id: null,
            form: {
                user_id: '',
                name: '',
                start_date: this.props.start_date,
                start_time: new Date(),
                end_date: this.props.end_date,
                end_time: new Date(),
                details: '',
                document: '',
            },
        }
    }

    createForm = () => {
        const { form } = this.state
        let steps = []

        steps.push({
            label: 'Select User',
            formFields: [
                {
                    name: 'user_id',
                    label: 'User',
                    type: 'autocomplete',
                    icon: '',
                    value: form.user_id,
                    url: 'users',
                    getOptionLabel: 'name',
                    validation: 'required',
                },
                {
                    name: 'document',
                    label: 'Document',
                    type: 'file',
                    icon: 'cloud_upload',
                    value: form.document,
                    validation: null,
                    editable: true,
                    accept: 'application/pdf,application/msword',
                }
            ]
        })

        steps.push({
            label: 'Task Details',
            formFields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    icon: '',
                    value: form.name,
                    validation: 'required',
                },
                {
                    name: 'details',
                    label: 'Details',
                    type: 'text',
                    icon: '',
                    value: form.details,
                    validation: 'min:1',
                }
            ]
        })

        steps.push({
            label: 'Start Date & time',
            formFields: [
                {
                    name: 'start_date',
                    label: 'Start Date',
                    type: 'date',
                    variant: 'inline',
                    format: 'DD-MM-YYYY',
                    value: form.start_date,
                    validation: 'required',
                },
                {
                    name: 'start_time',
                    label: 'Start Time',
                    type: 'time',
                    variant: 'inline',
                    format: 'hh:mm A',
                    value: form.start_time,
                    validation: 'required',
                }
            ]
        })

        steps.push({
            label: 'End Date & time',
            formFields: [
                {
                    name: 'end_date',
                    label: 'End Date',
                    type: 'date',
                    variant: 'inline',
                    format: 'DD-MM-YYYY',
                    value: form.end_date,
                    validation: 'required',
                },
                {
                    name: 'end_time',
                    label: 'End Time',
                    type: 'time',
                    variant: 'inline',
                    format: 'hh:mm A',
                    value: form.end_time,
                    validation: 'required',
                }
            ]
        })

        return steps
    }

    componentDidMount() {
        const { id } = this.props
        if (id && id !== 'new') {
            this.props.getData('form', 'tasks', id)
        }
    }

    static getDerivedStateFromProps(props, state) {
        let newState = {};
        if (props.id !== 'new' && props.form !== null) {
            newState.id = props.id
            newState.title = 'Edit Task'
            newState.submitText = 'Edit'
            newState.action = 'update'
            newState.form = props.form
        } else {
            newState.form = state.form
        }

        if (props.fileUpload !== null) {
            newState.form.document = props.fileUpload.result
            props.clearUpload();
        }

        if (props.formSubmit) {
            props.closeModal();
        }

        return newState
    }


    handleChange = (value, name) => {
        const { form } = this.state
        form[name] = value
        this.setState(form)
    }

    fileUpload = (file) => {
        this.props.upload(file, 'document')
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { action, id, form } = this.state
        if (form) {
            const formData = {
                user_id: form.user_id,
                name: form.name,
                start_date: form.start_date,
                start_time: form.start_time,
                end_date: form.end_date,
                end_time: form.end_time,
                details: form.details,
                document: form.document,
            }
            if (action === 'update') {
                this.props.updateData('task', 'tasks', id, formData)
            } else {
                this.props.createData('task', 'tasks', formData)
            }
        }
    }

    render() {
        const { submitText } = this.state
        return (
            <MuiForm
                steps={this.createForm()}
                handleChange={this.handleChange}
                fileUpload={this.fileUpload}
                handleSubmit={this.handleSubmit}
                submitText={submitText}
                submitFullWidth={false}
                fullWidth={true}
                noValidate={false}
            />
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
    getAll: crudActions._getAll,
    getData: crudActions._get,
    showError: alertActions.error,
    createData: crudActions._create,
    updateData: crudActions._update,
    closeModal: modalActions.close,
    upload: fileActions._upload,
    clearUpload: fileActions._clear,
};

export default connect(mapState, actionCreators)(Form);
