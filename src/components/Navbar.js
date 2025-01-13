// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import './App.css';
// import {daysOfWeek, months} from "../data/Schedule";
//
// export default function Navbar({setDate}) {
//
//     const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//
//     const calculateWeekNumber = (date) => {
//         const daysInMonth = [31, isLeapYear(date.getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//         const dayOfYear = daysInMonth.slice(0, date.getMonth()).reduce((sum, days) => sum + days, 0) + date.getDate();
//         return Math.floor(((dayOfYear - 13) / 7) % 4) + 1;
//     };
//
//     const changeDay = (offset) => {
//         const newDate = new Date(date);
//         newDate.setDate(date.getDate() + offset);
//         setDate(newDate);
//     };
//
//     const weekNumber = calculateWeekNumber(date);
//
//     return (
//         <div className="top-panel">
//             {date.toDateString() !== today.toDateString() && (
//                 <button className="nav-button" onClick={() => changeDay(-1)}><FaArrowLeft/></button>
//             )}
//             <div className="date-info">
//                     <span className="date-text">
//                         {daysOfWeek[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
//                     </span>
//                 <span className="week-number">Тиждень: {weekNumber}</span>
//             </div>
//             <button className="nav-button" onClick={() => changeDay(1)}><FaArrowRight/></button>
//         </div>
//     );
// }
