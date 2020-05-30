import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { crudService } from '../../_services';
import ReactSelectMaterialUi from "react-select-material-ui";

class MuiAutocompleteBox extends React.Component {

    constructor() {
        super()
        this.state = {
            search: false,
            searchText: '',
            options: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        const { url } = this.props
        const { searchText } = this.state
        const query = {
            search: searchText
        }
        crudService._getAllData(url, query)
            .then(
                result => {
                    if (result.status === 200) {
                        this.setState({
                            options: result.data.data,
                        })
                    }
                }
            );
    }

    handleChange = (value, name, index) => {
        this.props.handleChange(value, name, index)
    }

    onInputChange = (event) => {
        const newState = Object.assign({}, this.state);
        newState.searchText = event.target.value;
        this.setState(newState, () => {
            this.fetchData()
        });
    }

    render() {
        const { name, value, label, fullWidth, helperText, index, getOptionLabel } = this.props
        const { options } = this.state

        let selectOptions = []
        if (options) {
            options.forEach(element => {
                selectOptions.push({
                    label: element[getOptionLabel],
                    value: element.id,
                })
            });
        }

        return (
            <React.Fragment>
                <FormControl
                    error={helperText ? true : false}
                    fullWidth={fullWidth}
                >

                    <ReactSelectMaterialUi
                        label={label}
                        value={value}
                        options={selectOptions}
                        onChange={(e) => this.handleChange(e, name, index)}
                        onInput={this.onInputChange}
                        SelectProps={{
                            isClearable: true,
                        }}
                    />

                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )
    }
}

MuiAutocompleteBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,    
};

MuiAutocompleteBox.defaultProps = {
    name: "",
    label: "",
    value: "",    
}


export default MuiAutocompleteBox;