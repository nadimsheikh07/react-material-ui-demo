import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = {
    fileHidden: {
        display: 'none',
    }
};

class FileField extends React.Component {

    handleChange = (e, index) => {
        e.persist()
        this.props.handleChange(e.target.value, e.target.name, index)
    }

    fileUpload = (e) => {
        let file = e.target.files[0];
        this.props.fileUpload(file)
    }

    render() {
        const { classes, name, label, accept, editable, value, required, inputAdornmentPosition, icon, fullWidth, helperText, index } = this.props

        return (
            <React.Fragment>
                <input
                    className={classes.fileHidden}
                    id="document-file"
                    type="file"
                    accept={accept}
                    onChange={this.fileUpload}
                />
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}
                >

                    <InputLabel>{label}</InputLabel>
                    <Input
                        name={name}
                        readOnly={editable ? false : true}
                        type='url'
                        required={required}
                        value={value}
                        onChange={e => this.handleChange(e, index)}
                        endAdornment={
                            <label htmlFor="document-file">
                                <InputAdornment position={inputAdornmentPosition}>
                                    <Icon>{icon}</Icon>
                                </InputAdornment>
                            </label>
                        }
                    />

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )

    }
}

FileField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

FileField.defaultProps = {
    name: "",
    label: "",
    value: "",
    inputAdornmentPosition: 'end'
}

export default withStyles(useStyles)(FileField);