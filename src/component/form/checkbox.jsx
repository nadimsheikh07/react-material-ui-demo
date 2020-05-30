import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import FormHelperText from '@material-ui/core/FormHelperText';

class MuiCheckBox extends React.Component {

    handleChange = (e, index) => {
        e.persist()
        this.props.handleChange(e.target.checked, e.target.name, index)
    }

    render() {
        const { name, label, value, required, fullWidth, helperText, index } = this.props
        return (
            <React.Fragment>
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}
                >
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            checked={value ? true : false}
                            name={name}
                            control={<Checkbox color="primary" required={required} />}
                            label={label}
                            labelPlacement="end"
                            onChange={e => this.handleChange(e, index)}
                        />
                    </FormGroup>
                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )

    }
}

export default MuiCheckBox;