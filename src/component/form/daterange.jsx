import React from 'react';
import moment from 'moment'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


import { DateRangePicker } from "@matharumanpreet00/react-daterange-picker";

class MuiDatePicker extends React.Component {

    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    handleDateRange = () => {
        const { open } = this.state
        this.setState({ open: !open })
    }

    handleChange = (value, name, index) => {
        this.props.handleChange(value, name, index)
        this.handleDateRange()
    }

    openDateRange = () => {
        const { open } = this.state

        const customContentStyle = {
            width: `${800}px`,
            maxWidth: `${800}px`,
            height: `${450}px`,
            maxHeight: `${450}px`,
        };

        return (
            <Dialog
                open={open}
                onClose={this.openDateRange}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={customContentStyle}>
                    {this.renderDateRange(true)}
                </DialogContent>
            </Dialog>
        )
    }

    renderDateRange = () => {
        const { open } = this.state
        const { name, value, index } = this.props
        return (
            <DateRangePicker
                open={open}
                initialDateRange={value}
                onChange={range => this.handleChange(range, name, index)}
            />
        )
    }

    render() {
        const { name, label, value, fullWidth, helperText, format, variant } = this.props

        const labelValue = `${moment(value.startDate).format(format)} / ${moment(value.endDate).format(format)}`

        return (
            <React.Fragment>
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}
                >
                    <InputLabel>{label}</InputLabel>
                    <Input
                        name={name}
                        readOnly={true}
                        value={labelValue}
                        endAdornment={
                            <InputAdornment position='end' onClick={this.handleDateRange}>
                                <Icon>date_range</Icon>
                            </InputAdornment>
                        }
                    />

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>

                {variant !== 'inline' && this.openDateRange()}
                {variant === 'inline' && this.renderDateRange()}
            </React.Fragment>
        )

    }
}

export default MuiDatePicker;