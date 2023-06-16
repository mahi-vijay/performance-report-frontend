import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Heading from "./components/Heading";
import ScoreCard from "./components/ScoreCard";
import WeekCard from "./components/WeekCard";
import ErrorPage from "./components/errorPage";

const useStyles = makeStyles((theme) => ({}));

const API = "http://localhost:3001/reports/harsh@quantiphi.com";

export default function App() {
  const classes = useStyles();
  const [scoreData, setScoreData] = useState(null);
  const [weekData, setWeekData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

        if (res.ok) {
          setScoreData(data);

          if (data && data.data && data.data.weeks) {
            setWeekData(data.data.weeks);
          } else {
            setWeekData([]);
          }
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("An error occurred => " + error);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <div className={classes.root}>
      <Heading />
      <ScoreCard scoreData={scoreData} />
      <div className="dispweek">
        {weekData.map((week) => (
          <WeekCard key={week.weekId} weekData={week} />
        ))}
      </div>
    </div>
  );
}
