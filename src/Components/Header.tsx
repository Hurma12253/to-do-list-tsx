import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ThemeIcon from '../assets/svg/ThemeIcon'
import {makeStyles} from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background: theme.palette.primary.main,
        padding:'5px 40px'
    },
    logo:{
        color: theme.palette.background.paper
    },
    themeIcon:{
        cursor:'pointer',
        fill: theme.palette.background.paper,
        transition: '.2s',
        '&:hover':{
            transform: 'scale(1.1)',
            transition: '.2s'
        }
    }
}))

interface IHeaderProps{
    setTheme: (theme: string)=>void
}

const Header: React.FC<IHeaderProps> = (props) =>{
    const styles = useStyles()

    //menu anchor
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (themeName: string) => {
        if(themeName==='nothing'){
            setAnchorEl(null)
            return
        }
        props.setTheme(themeName)
        setAnchorEl(null)
    }

    return (
        <Box color='primary' className={styles.root}>
            <Typography variant='h4' className={styles.logo}>To do app </Typography>
            <IconButton onClick={handleClick}><ThemeIcon className={styles.themeIcon}/></IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose.bind(null,'nothing')}
            >
                <MenuItem onClick={handleClose.bind(null,'default')}>default</MenuItem>
                <MenuItem onClick={handleClose.bind(null,'light')}>light</MenuItem>
                <MenuItem onClick={handleClose.bind(null,'dark')}>dark</MenuItem>
            </Menu>
        </Box>
    )
}

export default Header
