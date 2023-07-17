import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Worker, Salary } from '../../types';

const initialState: Worker[] = [
    {
        name: 'Astxik',
        surname: 'Xachatryan',
        salary: [
            { year: 2021, amount: 200000 },
            { year: 2022, amount: 250000 },
            { year: 2023, amount: 400000 }
        ]
    },
    {
        name: 'Vahram',
        surname: 'Mkrtchyan',
        salary: [
            { year: 2020, amount: 200000 },
            { year: 2021, amount: 250000 },
            { year: 2022, amount: 300000 },
            { year: 2023, amount: 450000 }
        ]
    },
    {
        name: 'Anna',
        surname: 'Sahakyan',
        salary: [
            { year: 2021, amount: 200000 },
            { year: 2022, amount: 250000 },
            { year: 2023, amount: 350000 }
        ]
    }
]

const WorkerListSlice = createSlice({

    name: 'WorkerList',
    initialState,
    reducers: {
        addWorker: (state, action: PayloadAction<Worker>) => {
            if (!action.payload || state.includes(action.payload)) {
                return
            }
            state.push(action.payload)
        },

        addSalary: (state, action: PayloadAction<[number, number]>) => {
            const [index, year] = action.payload
            let taken = state[index].salary.findIndex(a => a.year === year)

            if (taken === -1) {
                let obj = { year, amount: 200000 } as Salary
                state[index].salary.push(obj)
            } else {
                let currentSalary = state[index].salary[taken]
                if (currentSalary.amount === 600000) {
                    state[index].salary.splice(taken, 1)
                } else {
                    currentSalary.amount += 50000
                }
            }
        },

        deleteWorker: (state, action: PayloadAction<[number]>) => {
            const [i] = action.payload
            return state.filter(a => a !== state[i])
        }
    }
})

export const { addWorker, addSalary, deleteWorker } = WorkerListSlice.actions
export default WorkerListSlice.reducer
