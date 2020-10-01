import React from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import {IThemes} from './Interfaces'

let defaultTheme = createMuiTheme({
    palette:{
      primary:{
        main:'#7C4DFF',
        contrastText: '#212121'
      },
      secondary:{
        main: '#FFFFFF',
        contrastText: '#212121'
      }
    }
  })
  
  let lightTheme = createMuiTheme({
    palette:{
      primary:{
        main:'#E91E63',
        contrastText: '#212121'
      },
      secondary:{
        main: '#FFFFFF',
        light: '#FFFFFF'
      }
    }
  })
  
  let darkTheme = createMuiTheme({
    palette: {
      primary:{
        main:'#212121',
        contrastText: '#FFFFFF'
      },
      secondary:{
        main: '#212121',
        light: '#607D8B'
      },
      background:{
        default: '#212121'
      }
    }
  })

  

interface IThemesProps{
    children: React.ReactNode
    theme: string
}

function Themes(props: IThemesProps) {
    
    const themes: IThemes = {
        default: defaultTheme,
        light: lightTheme,
        dark: darkTheme
      }
        
    return (
        <ThemeProvider theme={themes[props.theme]}>
            {props.children}
        </ThemeProvider>
    )
}

export default Themes
