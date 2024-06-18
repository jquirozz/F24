import { Link } from "react-router-dom";

import "./History.scss";

function History({ history, setHistory }) {
  const { year, race } = history;

  const handleYear = (newYear) => setHistory({ ...history, year: newYear });
  const handleRace = (newRace) => setHistory({ ...history, race: newRace });

  return (
    <div className="History">
      <h2>
        {year} - {race}
      </h2>
      <button onClick={() => handleYear(2023)}>2024</button>
      <button onClick={() => handleRace(2)}>RACE 2</button>
      <Link to="/p/d/alonso">Profile Alonso</Link>
    </div>
  );
}

export default History;
