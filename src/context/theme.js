import { useContext, createContext } from "react";

// inside createContext there are default values and fucntion
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

// using useTheme() we can access themeMode, darkTheme, lightTheme
export default function useTheme(){
    return useContext(ThemeContext)
}