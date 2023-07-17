import { List, ListItem, ListItemText, TextField } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../types';
import { addYear } from './YearList.slice';

const YearList = () => {

    const years = useAppSelector(state => state.year)
    const [number, setNumber] = useState(0)
    const dispatch = useAppDispatch()

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(addYear(number))
            setNumber(0)
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Year List</h1>
            <TextField
                value={number}
                onChange={e => {
                    let value = parseInt(e.target.value);

                    if (typeof value == 'number') {
                        if (e.target.value.length > 0) {
                            setNumber(value)
                        } else {
                            setNumber(0)
                        }
                    }
                }}
                onKeyDown={handleKeyDown}
            />
            <List sx={{ width: 100, margin: "auto" }}>
                {
                    years.map((elm, i) => {
                        return <ListItem key={i}>
                            <ListItemText
                                primary={elm}
                            />
                        </ListItem>
                    })
                }
            </List>
        </div>
    )
}
export default YearList;