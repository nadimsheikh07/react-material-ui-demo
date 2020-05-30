import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { crudActions } from '../../_actions';

import RenderFormField from './renderFormField'


const styles = (theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class MuiForm extends React.Component {
    constructor() {
        super()
        this.validator = new SimpleReactValidator({
            autoForceUpdate: this,
            element: message => message
        });
    }

    clearFieldError = () => {
        this.props.clearData('formError')
    }

    getFieldError = (field) => {
        const { formError } = this.props
        let error
        if (formError) {
            formError.forEach(element => {
                if (element.field === field) {
                    error = element.message
                }
            });
        }
        return error
    }

    handleChange = (value, index) => {
        this.props.handleChange(value, index)
        this.clearFieldError()
        this.validator.showMessages();
        this.forceUpdate();
    }

    fileUpload = (file) => {
        this.props.fileUpload(file)
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        if (this.validator.allValid()) {
            this.props.handleSubmit(event)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        const { formFields, classes, submitText, submitFullWidth, fullWidth } = this.props
        return (
            <React.Fragment>
                <form className={classes.form} noValidate onSubmit={this.handleSubmit}>

                    {formFields.map((form, index) => {

                        let helperText
                        if (form.validation) {
                            helperText = this.validator.message(form.name, form.value, form.validation)
                        }

                        if (this.getFieldError(form.name)) {
                            helperText = this.getFieldError(form.name)
                        }

                        return (
                            <RenderFormField
                                key={index}
                                fullWidth={fullWidth}
                                helperText={helperText}
                                index={index}
                                form={form}
                                handleChange={this.handleChange}
                                fileUpload={this.fileUpload}
                            />
                        )
                    })}



                    <Button
                        type="submit"
                        fullWidth={submitFullWidth}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {submitText}
                    </Button>

                </form>
            </React.Fragment>
        )

    }
}

function mapState(state) {
    const { formError } = state;
    return {
        formError
    };
}

const actionCreators = {
    clearData: crudActions._clear,
};

export default connect(mapState, actionCreators)(withStyles(styles)(MuiForm));
