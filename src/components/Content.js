// import { schedule, daysOfWeek } from "../data/Schedule";
// import './App.css';
//
// export default function Context({ date, weekNumber }) {
//     const currentDay = daysOfWeek[date.getDay()];
//
//     const getScheduleForDay = (day, weekNumber) => {
//         const key = `${day}${weekNumber}`;
//         return schedule[key] || ['Розклад відсутній'];
//     };
//
//     const lessons = getScheduleForDay(currentDay, weekNumber);
//
//     return (
//         <div className="content">
//             <ul className="lesson-list">
//                 {lessons.map((lesson, index) => (
//                     <li key={index} className="lesson-item">
//                         <button className="number-of-lesson-button">
//                             {index + 1}
//                         </button>
//                         <button className={`lesson-button ${lesson ? '' : 'empty'}`}>
//                             {lesson || '🧘🏿'}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
