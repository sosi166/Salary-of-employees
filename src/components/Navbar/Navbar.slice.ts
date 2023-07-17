import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyState {
    activePage: string
}
const initialState: MyState = {
    activePage: 'Workers'
}
const NavbarSlice = createSlice({
    name: 'Navbar',
    initialState,
    reducers: {
        switchPage: (state: MyState, action: PayloadAction<string>) => {
            state.activePage = action.payload
        }
    }
})

export const { switchPage } = NavbarSlice.actions
export default NavbarSlice.reducer