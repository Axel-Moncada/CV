import React, { useEffect, useState } from "react"

const DateTimeComponent = () => {
    const [dateTime, setDateTime] = useState({
        date: '',
        day: '',
        time: ''
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            const timeOptions = { hour: 'numeric', minute: '2-digit' };

            setDateTime({
                date: now.toLocaleDateString('es-ES', dateOptions), // Formatea la fecha en español
                day: now.toLocaleDateString('es-ES', { weekday: 'long' }), // Obtiene el día de la semana en español
                time: now.toLocaleTimeString('es-ES', timeOptions) // Formatea la hora en español
            });
        }, 1000);

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="datetime-component text-center">            
            <p className="text-lg md:text-xs capitalize text-gray-400">{dateTime.date}</p>
            <p className=" text-7xl md:text-5xl ">{dateTime.time}</p>
        </div>
    );
};

export default DateTimeComponent;