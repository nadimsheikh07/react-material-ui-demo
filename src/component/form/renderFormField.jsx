import React from 'react';

import MuiTextBox from './textbox'
import MuiCheckBox from './checkbox'
import MuiPassTextBox from './password'
import MuiSelectBox from './selectbox'
import MuiMultiSelectBox from './multiselectbox'
import MuiDatePicker from './date'
import MuiDateRangePicker from './daterange'
import MuiTimePicker from './time'
import MuiDateTimePicker from './datetime'
import FileField from './file'
import MuiAutocompleteBox from './autocomplete'
import MuiMultiAutocompleteBox from './multiAutocomplete'

class RenderFormField extends React.PureComponent {

    handleChange = (value, index) => {
        this.props.handleChange(value, index)
    }

    fileUpload = (file) => {
        this.props.fileUpload(file)
    }

    render() {
        const { form, fullWidth, helperText, index } = this.props
        switch (form.type) {
            case 'autocomplete':
                return (
                    <MuiAutocompleteBox
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        url={form.url}
                        getOptionLabel={form.getOptionLabel}
                        handleChange={this.handleChange}
                    />
                )
            case 'multi_autocomplete':
                return (
                    <MuiMultiAutocompleteBox
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        url={form.url}
                        getOptionLabel={form.getOptionLabel}
                        handleChange={this.handleChange}
                    />
                )
            case 'select':
                return (
                    <MuiSelectBox
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        options={form.options}
                        handleChange={this.handleChange}
                    />
                )
            case 'multiselect':
                return (
                    <MuiMultiSelectBox
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        options={form.options}
                        handleChange={this.handleChange}
                    />
                )
            case 'password':
                return (
                    <MuiPassTextBox
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        handleChange={this.handleChange}
                    />
                )

            case 'file':
                return (
                    <FileField
                        label={form.label}
                        name={form.name}
                        type={form.type}
                        icon={form.icon}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        editable={form.editable}
                        accept={form.accept}
                        handleChange={this.handleChange}
                        fileUpload={this.fileUpload}
                    />
                )
            case 'checkbox':
                return (
                    <MuiCheckBox
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        handleChange={this.handleChange}
                    />
                )

            case 'daterange':
                return (
                    <MuiDateRangePicker
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        variant={form.variant}
                        format={form.format} 
                        handleChange={this.handleChange}
                    />
                )
            case 'date':
                return (
                    <MuiDatePicker
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        variant={form.variant}
                        format={form.format}
                        handleChange={this.handleChange}
                    />
                )
            case 'datetime':
                return (
                    <MuiDateTimePicker
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        variant={form.variant}
                        format={form.format}
                        handleChange={this.handleChange}
                    />
                )
            case 'time':
                return (
                    <MuiTimePicker
                        label={form.label}
                        name={form.name}
                        required={form.required}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        variant={form.variant}
                        format={form.format}
                        handleChange={this.handleChange}
                    />
                )

            default:
                return (
                    <MuiTextBox
                        label={form.label}
                        name={form.name}
                        type={form.type}
                        icon={form.icon}
                        multiline={form.multiline}
                        rowsMax={form.rowsMax}
                        fullWidth={fullWidth}
                        helperText={helperText}
                        index={index}
                        key={index}
                        value={form.value}
                        handleChange={this.handleChange}
                    />
                )
        }
    }
}

export default RenderFormField