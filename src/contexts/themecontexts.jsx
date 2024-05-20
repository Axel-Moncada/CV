import React, { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();

// Crear el proveedor de contexto
export const ThemeContextProvider = (props) => {
    // Estado para el tema
    const [theme, setTheme] = useState("light");

    // Función para cambiar el tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Efecto para aplicar el tema al HTML
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    // Pasar el estado y la función de cambio de tema a los componentes hijos
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
