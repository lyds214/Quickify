import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core'

//Icons 
import AdjustIcon from '@material-ui/icons/Adjust';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    logoSpacing: {
        marginRight: theme.spacing(2),
    },
    logoRight: {
        marginLeft: 'auto',
    }
}))

const Header = () => {

    const classes = useStyles()

    return (
        <div>
            <AppBar position = "static" elevation = {0}>
                <Toolbar>
                    <AdjustIcon className = {classes.logoSpacing}/>
                    <Typography variant = "h6">Hello</Typography>

                    <div className = {classes.logoRight}>
                        <IconButton color = "inherit">
                            <SearchIcon/>
                        </IconButton>
                        <IconButton color = "inherit">
                            <ShoppingCartIcon/>
                        </IconButton>
                        <IconButton color = "inherit">
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
                
            </AppBar>
        </div>
    )
}

export default Header
