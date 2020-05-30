import React from 'react'
import Header from './header'
import Footer from './footer'
import MuiTheme from './theme'
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { drawerWidth } from './constant'

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            openMenu: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if (window.innerWidth > 414) {
            this.setState({
                openMenu: true
            })
        } else {
            this.setState({
                openMenu: false
            })
        }
    }

    handleOpenMenu = () => {
        const { openMenu } = this.state
        this.setState({
            openMenu: !openMenu
        })
    }

    render() {
        const { classes } = this.props
        const { openMenu } = this.state

        return (
            <React.Fragment>
                <MuiTheme>
                    <div className={classes.root}>
                        <Header openMenu={openMenu} handleOpenMenu={this.handleOpenMenu} />

                        <main
                            className={clsx(classes.content, {
                                [classes.contentShift]: openMenu,
                            })}
                        >
                            <div className={classes.drawerHeader} />
                            {this.props.children}
                            <Footer />
                        </main>
                    </div>
                </MuiTheme>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Layout);