import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageTitle from "../../components/pageTitle";
import ScoreCard from "./scoreCard";
import WeekCard from "./weekCard";
import ErrorPage from "../../components/errorPage";

const useStyles = makeStyles((theme) => ({}));

const API = "https://api.npoint.io/75d511a3d5eea342626e";

export default function Report() {
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
      <PageTitle key="title" title="Performance Report"/>
      <ScoreCard scoreData={scoreData} />
      <div className="dispweek">
        {weekData.map((week) => (
          <WeekCard key={week.weekId} weekData={week} />
        ))}
      </div>
    </div>
  );
}
