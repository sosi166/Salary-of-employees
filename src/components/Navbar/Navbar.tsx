import { Button } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../types'
import { switchPage } from './Navbar.slice'

const Navbar = () => {

    const currentPage = useAppSelector(state => state.navbar.activePage)
    const dispatch = useAppDispatch()

    return (
        <div style={{ textAlign: 'center', margin: 10 }}>
            <h1>-{currentPage}-</h1>
            <Button
                variant="contained"
                color="success"
                onClick={() => dispatch(switchPage('Workers'))}>Workers</Button>
            <Button
                sx={{ m: 2 }}
                variant="contained"
                color="success"
                onClick={() => dispatch(switchPage('WorkerList'))}>Worker List</Button>
            <Button
                variant="contained"
                color="success"
                onClick={() => dispatch(switchPage('YearList'))}>Year List</Button>
        </div>
    )
}
export default Navbar;