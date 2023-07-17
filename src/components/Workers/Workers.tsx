import { Table, TableCell, tableCellClasses, TableHead, TableBody, TableRow, Paper, TableContainer, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Worker, useAppSelector, useAppDispatch } from '../../types';
import { addSalary, deleteWorker } from '../WorkerList/WorkerList.slice';

const Workers = () => {

    const workers = useAppSelector(state => state.workers)
    const years = useAppSelector(state => state.year)
    const dispatch = useAppDispatch()

    const amount = (index: number, years: number) => {
        dispatch(addSalary([index, years]))
    }

    const delWorker = (i: number) => {
        dispatch(deleteWorker([i]))
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <div style={{ textAlign: 'center' }} >
            <h1>Salary of employees</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Workers</StyledTableCell>
                            {
                                years.map((elm, i) => {
                                    return <StyledTableCell align="center" key={i} >{elm.toString()}</StyledTableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            workers.map((elm: Worker, i) => {
                                return <StyledTableRow key={i}>
                                    <TableCell
                                        sx={{ alignContent: 'center' }}>
                                        <DeleteIcon onClick={() => delWorker(i)} > </DeleteIcon>
                                        - {elm.name} {elm.surname}
                                    </TableCell>
                                        {
                                            years.map((yr, j) => {
                                                let item = elm.salary.find(a => a.year === yr)
                                                let text = item ? item.amount : ''
                                                return <TableCell align="center" key={j} onClick={() => amount(i, yr)}>
                                                    <h3 style={{ textAlign: 'center' }}>{text}</h3>
                                                </TableCell>
                                            })
                                        }
                                    </StyledTableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Workers;