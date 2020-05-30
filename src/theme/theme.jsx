import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
    direction: 'ltr',
    palette: {
        primary: indigo,
        secondary: green,
    }
});

class MuiTheme extends React.Component {
    
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                {this.props.children}
            </MuiThemeProvider>
        )

    }
}

export default MuiTheme