import './App.css';
import { useState } from "react";

function App() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const [day, setDay] = useState(today.getDay());
    const [date, setDate] = useState(today.getDate());
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const calculateWeekNumber = () => {
        // Кількість днів у кожному місяці
        const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Підрахунок днів до поточного дня року
        const daysElapsed = daysInMonth
            .slice(0, month) // Вибираємо всі місяці до поточного
            .reduce((sum, days) => sum + days, 0) + date;

        // Обчислення номера тижня
        return Math.floor((daysElapsed - 13) / 7 + 1) % 4;
    };

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    return (
        <div className="app">
            <div className="info-display">
                <h1>Today:</h1>
                <p className="date">
                    {daysOfWeek[day]}, {date} {months[month]} {year}
                </p>
                <p className="week-number">
                    Week Number: {calculateWeekNumber()}
                </p>
            </div>
        </div>
    );
}

export default App;
