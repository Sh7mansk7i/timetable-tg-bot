import './App.css';
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {schedule, daysOfWeek, months, lessonTime} from "./data/Schedule";

function App() {
    const today = new Date();
    const [date, setDate] = useState(today);

    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    const calculateWeekNumber = (date) => {
        const daysInMonth = [31, isLeapYear(date.getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const dayOfYear = daysInMonth.slice(0, date.getMonth()).reduce((sum, days) => sum + days, 0) + date.getDate();
        return Math.floor(((dayOfYear - 13) / 7) % 4) + 1;
    };

    const getScheduleForDay = (day, weekNumber) => {
        const key = `${day}${weekNumber}`;
        return schedule[key];
    };

    const changeDay = (offset) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + offset);
        setDate(newDate);
    };

    const weekNumber = calculateWeekNumber(date);
    const currentDay = daysOfWeek[date.getDay()];
    const lessons = getScheduleForDay(currentDay, weekNumber);

    return (
        <div className="app">
            <div className="top-panel">
                {date.toDateString() !== today.toDateString() && (
                    <button className="nav-button" onClick={() => changeDay(-1)}><FaArrowLeft /></button>
                )}
                <div className="date-info">
                    <span className="date-text">
                        {daysOfWeek[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
                    </span>
                    <span className="week-number">Тиждень: {weekNumber}</span>
                </div>
                <button className="nav-button" onClick={() => changeDay(1)}><FaArrowRight /></button>
            </div>
            <div className="content">
                <ul className="lesson-list">
                    {lessons ? (lessons.map((lesson, index) => (
                        <li key={index} className="lesson-item">
                            <button className="number-of-lesson-button">
                                {index + 1}
                            </button>
                            <button className={`lesson-button ${lesson ? '' : 'empty'}`}>
                                {lesson || '🧘🏿'}
                            </button>
                            <button className="time-to-lesson-button">
                                {lessonTime[index]}
                            </button>
                        </li>
                    ))) : (<>🧘🏿</>)}
                </ul>
            </div>
        </div>
    );
}

export default App;