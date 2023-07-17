import { List, ListItem, ListItemText, TextField } from '@mui/material';
import { Worker, useAppDispatch, useAppSelector } from '../../types';
import { useState, KeyboardEvent } from 'react';
import { addWorker } from './WorkerList.slice';

const WorkerList = () => {

    const workers = useAppSelector(state => state.workers)
    const dispatch = useAppDispatch()
    const [text, setText] = useState('')

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {

        if(e.key === 'Enter'){
            const [name, surname] = text.split(' ')
            let work = {name, surname, salary:[]} as Worker
            dispatch(addWorker(work))
            setText('')
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Worker List</h1>
            <TextField
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <List sx={{ width: 200, margin: 'auto' }}>
                {
                    workers.map((elm, i) => {
                        return <ListItem key={i}>
                            <ListItemText
                                primary={elm.name + ' ' + elm.surname}
                            />
                        </ListItem>
                    })
                }
            </List>
        </div>
    )
}
export default WorkerList