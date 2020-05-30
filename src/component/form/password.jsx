import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import FormHelperText from '@material-ui/core/FormHelperText';

class MuiPassTextBox extends React.Component {
    constructor() {
        super()
        this.state = {
            showPassword: false
        }
    }

    handleShowPassword = () => {
        const { showPassword } = this.state
        this.setState({
            showPassword: !showPassword
        })
    }

    handleChange = (e, index) => {
        e.persist()
        this.props.handleChange(e.target.value, e.target.name, index)
    }

    render() {
        const { name, label, value, required, inputAdornmentPosition, fullWidth, helperText, index } = this.props
        const { showPassword } = this.state
        return (
            <React.Fragment>
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}>
                    <InputLabel>{label}</InputLabel>
                    <Input
                        name={name}
                        type={showPassword ? 'text' : 'password'}
                        required={required}
                        value={value}
                        onChange={e => this.handleChange(e, index)}
                        endAdornment={
                            <InputAdornment position={inputAdornmentPosition}>
                                <Icon onClick={this.handleShowPassword}>{showPassword ? 'visibility' : 'visibility_off'}</Icon>
                            </InputAdornment>
                        }
                    />

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )

    }
}

MuiPassTextBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

MuiPassTextBox.defaultProps = {
    name: "",
    label: "",
    value: "",
    inputAdornmentPosition: 'end'
}

export default MuiPassTextBox;