import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_SIDE_MENU } from '../../Utils/Constants'

const initialState = {
    ActiveBottomNavigation:
        localStorage.getItem('ActiveBottomNavigation') ||
        DEFAULT_SIDE_MENU[0].title,
}

export const NavigationSlice = createSlice({
    name: 'Navigation',
    initialState,
    reducers: {
        setActiveBottomNavigation: (state, action) => {
            state.ActiveBottomNavigation = action.payload.ActiveBottomNavigation
            localStorage.setItem(
                'ActiveBottomNavigation',
                action.payload.ActiveBottomNavigation
            )
        },
    },
})

export const { setActiveBottomNavigation } = NavigationSlice.actions
export default NavigationSlice.reducer
