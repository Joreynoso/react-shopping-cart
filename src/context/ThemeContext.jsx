import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null)

export default function ThemeProvider({ children }) {

    // --> set state for Theme, by default is ligth
    const [theme, settheme] = useState(() => {
        return localStorage.getItem('theme') || 'ligth'
    })

    // --> toggle theme
    const toggleTheme = () => {
        console.log('theme status theme', theme)
        settheme(prev => prev === 'dark' ? 'ligth' : 'dark')
    }

    // --> interact with HTML to change htlm tag
    useEffect(() => {
        const root = document.documentElement //
        if (theme === 'dark') {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        // --> devuelve un objeto por eso {{}}
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

