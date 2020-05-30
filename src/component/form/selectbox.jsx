import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';

class MuiSelectBox extends React.Component {

    handleChange = (e, index) => {
        e.persist()
        this.props.handleChange(e.target.value, e.target.name, index)
    }

    render() {
        const { name, label, value, required, fullWidth, options, helperText, index } = this.props
        return (
            <React.Fragment>
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}
                >

                    <InputLabel>{label}</InputLabel>

                    <Select
                        name={name}
                        required={required}
                        value={value}
                        onChange={e => this.handleChange(e, index)}
                        inputProps={{
                            name: name,
                        }}
                    >
                        {options && options.map(option => {
                            return (<MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>)
                        })}
                    </Select>

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )

    }
}

MuiSelectBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

MuiSelectBox.defaultProps = {
    name: "",
    label: "",
    value: "",
    inputAdornmentPosition: 'end'
}

export default MuiSelectBox;