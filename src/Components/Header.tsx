import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function Header() {
    return (
        <AppBar color='primary' position='static'>
            <Toolbar>
                <Typography variant='h4'>To do app </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
