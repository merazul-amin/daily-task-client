import React, { createContext, useState } from 'react';
export const DarkLightTheme = createContext();
const ThemeContext = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <>
            <DarkLightTheme.Provider value={{ isDarkMode, setIsDarkMode }}>
                {children}
            </DarkLightTheme.Provider>
        </>
    );
};

export default ThemeContext;