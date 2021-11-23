import React, { createContext } from "react";

export const themes = {
    light: {
        white: '#09090F',
        primary: '#FFFFFF',
    },
    dark: {
        primary: '#09090F',
        white: '#FFFFFF'
    },
};

export const ThemeContext = createContext(
    themes.dark
);

