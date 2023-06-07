import React, { useEffect, useState } from "react";
import WeekCard from "./WeekCard";

const API = "https://api.npoint.io/9a77dd9e14cbab0c0bff";

function Weeks() {
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const fetchWeekData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setWeekData(data.data.weeks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeekData();
  }, []);

  return (
    <div className="dispweek">
      {weekData.map((week) => (
        <WeekCard key={week.weekId} weekData={week} />
      ))}
    </div>
  );
}

export default Weeks;