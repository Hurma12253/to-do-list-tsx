import React, {useState, useRef, useEffect} from 'react';
import Header from './Header'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import {ITodo} from './Interfaces'
import Todolist from './Todolist';

interface IAppProps{
  setTheme?: (theme: string)=>void
}

const App: React.FC<IAppProps> = (props)=> {
  
  const useStyles = makeStyles(theme =>({
    container:{
      backgroundColor: theme.palette.background.default,
      height: '100vh'
    },
    root:{
      display:'flex',
      flexDirection:'column',
    },
    content:{
      paddingTop:'20px'
    },
    textfield:{
      '&>*':{
        fontSize:'26px',
        color: theme.palette.primary.contrastText,
      },
      '&>.Mui-focused':{
        color: theme.palette.primary.contrastText,
      },
      marginBottom:'30px'
    }
  }))
  const styles = useStyles()
  

  const ref = useRef<HTMLInputElement>()

  const localStorageTodos: Array<ITodo> = JSON.parse(localStorage.getItem('todos')||'[]')

  const [todos,setTodos] = useState<ITodo[]>(localStorageTodos)

  const addTodo = (title: string) =>{
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      achieved:false
    }
    setTodos(prev => [newTodo,...prev])

  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const setAchieved = (id: number) => {
    setTodos(prev => prev.map(todo=>todo.id===id?{...todo,achieved:!todo.achieved}:todo))
  }

  const onKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      if(ref.current!.value !== ''){
        addTodo(ref.current!.value)
        ref.current!.value = ''
      }
    }
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <Container maxWidth='xl' disableGutters className={styles.container}>
      <Header setTheme={props.setTheme||function(){}}/>
      <Container className={styles.content}>
        <TextField
        inputRef={ref} 
        fullWidth
        label='Введите название дела'
        className={styles.textfield}
        onKeyPress={onKeyPress}
        />
        <Todolist 
        todos={todos}
        removeTodo={removeTodo}
        setAchieved={setAchieved}
        />
      </Container>
    </Container>
  );
}

export default App;
