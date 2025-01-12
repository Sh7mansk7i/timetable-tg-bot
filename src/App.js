import './App.css';
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {
    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

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
            <div className="top-panel">
                {date.toDateString() !== today.toDateString() && (
                    <button onClick={() => changeDay(-1)}><FaArrowLeft/></button>
                )}
                <div className="date-info">
                    <span className="date-text">
                        {daysOfWeek[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
                    </span>
                    <span className="week-number">Тиждень: {calculateWeekNumber(date)}</span>
                </div>
                <button onClick={() => changeDay(1)}><FaArrowRight/></button>
            </div>
            <div className="content">
                <h1>Основний контент</h1>
                <p>Тут буде розміщено основний контент.</p>
            </div>
        </div>
    );
}

export default App;
