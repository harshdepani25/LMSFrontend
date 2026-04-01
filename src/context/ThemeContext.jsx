import { TOGGLE_THEME } from "./ActionType";
import { themereducer } from "./reduer/theme.reduer";
import { createContext, useReducer } from 'react'


const initialValues = {
    theme: 'light'
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themereducer, initialValues);

    const toggletheme = (val) => {
        dispatch({ type: TOGGLE_THEME, payload: val === 'light' ? 'light' : 'dark' })
    }

    return (
        <ThemeContext.Provider
            value={{...state , toggletheme}}
        >
    { children }
        </ThemeContext.Provider >
    )
}