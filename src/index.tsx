import React, { ReactElement, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import Themes from './Components/Themes'

interface IThemeWrapperProps{
  children?: React.ReactNode
}

const ThemeWrapper: React.FC<IThemeWrapperProps> = ({children}) =>{
  const [theme,setTheme] = useState<string>(JSON.parse(localStorage.getItem('theme')||'default'))

  useEffect(()=>{
    localStorage.setItem('theme',JSON.stringify(theme))
  },[theme])

  return(
    <Themes theme={theme}>
      {React.Children.map(children,(child)=>{
        return React.cloneElement(child as ReactElement<any>,{setTheme: setTheme})
      })}
    </Themes>
  )
}

ReactDOM.render(
  <ThemeWrapper>
    <App/>
  </ThemeWrapper>,
  document.getElementById('root')
);

serviceWorker.unregister();
