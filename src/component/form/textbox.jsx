import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import FormHelperText from '@material-ui/core/FormHelperText';

class MuiTextBox extends React.Component {

    handleChange = (e, index) => {
        e.persist()
        this.props.handleChange(e.target.value, e.target.name, index)
    }

    render() {
        const { name, type, label, value, required, inputAdornmentPosition, icon, fullWidth, helperText, multiline, rowsMax, index } = this.props
        return (
            <React.Fragment>
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}
                >

                    <InputLabel>{label}</InputLabel>
                    <Input
                        name={name}
                        type={type}
                        required={required}
                        value={value}
                        multiline={multiline}
                        rowsMax={rowsMax}
                        onChange={e => this.handleChange(e, index)}
                        endAdornment={
                            <InputAdornment position={inputAdornmentPosition}>
                                <Icon>{icon}</Icon>
                            </InputAdornment>
                        }
                    />

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )

    }
}

MuiTextBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

MuiTextBox.defaultProps = {
    name: "",
    label: "",
    value: "",
    inputAdornmentPosition: 'end'
}

export default MuiTextBox;