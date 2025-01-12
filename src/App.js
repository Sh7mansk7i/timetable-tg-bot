import './App.css';
import { useState } from "react";

function App() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const [date, setDate] = useState(today);

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    const calculateWeekNumber = (date) => {
        const daysInMonth = [31, isLeapYear(date.getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const dayOfYear = daysInMonth.slice(0, date.getMonth()).reduce((sum, days) => sum + days, 0) + date.getDate();
        return Math.floor(((dayOfYear - 13) / 7) % 4) + 1;
    };

    const changeDay = (offset) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + offset);
        setDate(newDate);
    };

    return (
        <div className="app">
            <div className="header">
                <h1 className="title">Timetable</h1>
            </div>
            <div className="top-panel">
                {date.toDateString() !== today.toDateString() && (
                    <button className="nav-button" onClick={() => changeDay(-1)}>⬅️</button>
                )}
                <div className="date-info">
                    <span className="date-text">
                        {daysOfWeek[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
                    </span>
                    <span className="week-number">Week Number: {calculateWeekNumber(date)}</span>
                </div>
                <button className="nav-button" onClick={() => changeDay(1)}>➡️</button>
            </div>
            <div className="content">
                <h1>Main Content</h1>
                <p>This is where your main content will go.</p>
            </div>
        </div>
    );
}

export default App;
