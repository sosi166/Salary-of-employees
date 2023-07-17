import WorkerListReducer from './components/WorkerList/WorkerList.slice';
import YearListReducer from './components/YearList/YearList.slice';
import NavbarReducer from './components/Navbar/Navbar.slice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const root = combineReducers({
    workers: WorkerListReducer,
    year: YearListReducer,
    navbar: NavbarReducer
})

export const store = configureStore({ reducer: root })
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>