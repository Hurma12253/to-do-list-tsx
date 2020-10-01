import React from 'react'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {ITodo} from './Interfaces'

const useStyles = makeStyles(theme =>({
    item:{
        display:'flex',
        alignItems:'center',
        position:'relative',
        marginBottom:'20px',
        cursor:'pointer',
        color: theme.palette.secondary.contrastText,
        background: theme.palette.secondary.main,
    },
    deleteBtn:{
        position:'absolute',
        right:'10px',
        color: theme.palette.primary.contrastText
    },
    checkbox:{
        color: theme.palette.primary.contrastText,
        '&>.MuiIconButton-label':{
            color: theme.palette.primary.contrastText,
        }
    },
    achieved:{
        textDecoration:'line-through'
    }
}))

interface ITodoitemProps {
    todo: ITodo
    removeTodo: (id: number) => void
    setAchieved: (id: number) => void
}

const Todoitem: React.FC<ITodoitemProps> = ({todo,removeTodo, setAchieved}) => {
    const styles = useStyles()

    return (
        <Paper className={styles.item} onClick={()=>setAchieved(todo.id)}>
            <Checkbox className={styles.checkbox} checked={todo.achieved} />
            <Typography className={todo.achieved?styles.achieved:undefined}>{todo.title}</Typography>
            <Button className={styles.deleteBtn} onClick={removeTodo.bind(null,todo.id)}>delete</Button>
        </Paper>
    )
}

export default Todoitem
