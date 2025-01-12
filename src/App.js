import './App.css';
import { useState } from "react";

function App() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [day, setDay] = useState(new Date().getDay());

    const next = () => {
        setDay((prevDay) => (prevDay + 1) % 7);
    };

    const prev = () => {
        setDay((prevDay) => (prevDay - 1 + 7) % 7);
    };

    return (
        <div className="app">
            <div className="day-display">
                <button className="nav-button" onClick={prev}>⬅️</button>
                <span className="day-name">{daysOfWeek[day]}</span>
                <button className="nav-button" onClick={next}>➡️</button>
            </div>
        </div>
    );
}

export default App;
