import './App.css';
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { schedule, daysOfWeek, months, lessonTime } from "./data/Schedule";

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

    const isSameDay = (d1, d2) => {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    };

    const getLessonStatus = (index) => {
        const now = new Date();
        now.setHours(11, 15, 0, 0);
        const [start, end] = lessonTime[index].split('-');
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);

        const lessonStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, startMinute);
        const lessonEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, endMinute);

        if (now < lessonStart) {
            return `${lessonTime[index]}`;
        } else if (now >= lessonStart && now <= lessonEnd) {
            const minutesToEnd = Math.ceil((lessonEnd - now) / 60000);
            return `⏳ ${minutesToEnd} хв`;
        } else if (index < lessonTime.length - 1) {
            const [nextStart] = lessonTime[index + 1].split('-');
            const [nextStartHour, nextStartMinute] = nextStart.split(':').map(Number);
            const nextLessonStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nextStartHour, nextStartMinute);

            if (now < nextLessonStart) {
                const minutesToNext = Math.floor((nextLessonStart - now) / 60000);
                return `➡️ ${minutesToNext} хв`;
            }
        }

        return "🏁";
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
                                {isSameDay(date, today) ? getLessonStatus(index) : lessonTime[index]}
                            </button>
                        </li>
                    ))) : (<>🧘🏿</>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
