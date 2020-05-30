import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

class MuiMultiSelectBox extends React.Component {

    handleChange = (e, index) => {
        e.persist()
        this.props.handleChange(e.target.value, e.target.name, index)
    }

    render() {
        const { name, label, value, required, fullWidth, options, helperText, index } = this.props

        let selected = []
        if (options && options.length) {
            options.map(option => {
                if (value.includes(option.id) === true) {
                    selected.push(option.name)
                }
                return null
            })
        }

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
                        multiple
                        displayEmpty={true}
                        renderValue={renderItem => {
                            if (selected) {
                                return selected.join(', ')
                            }
                            return renderItem.join(',')
                        }}
                        onChange={e => this.handleChange(e, index)}
                        inputProps={{
                            name: name,
                        }}
                    >
                        {options && options.map(option => {
                            return (
                                <MenuItem
                                    key={option.id}                                    
                                    value={option.id}
                                >
                                    <Checkbox checked={value.indexOf(option.id) > -1} />
                                    {option.name}
                                </MenuItem>
                            )
                        })}
                    </Select>

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment >
        )

    }
}

MuiMultiSelectBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

MuiMultiSelectBox.defaultProps = {
    name: "",
    label: "",
    value: "",
    inputAdornmentPosition: 'end'
}

export default MuiMultiSelectBox;