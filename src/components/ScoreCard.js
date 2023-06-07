import { useEffect, useState } from "react";
import React from "react";
import "./styles/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
//import WeekCard from "./WeekCard";

export default function ScoreCard() {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/37e9946d519668936e37")
      .then((response) => response.json())
      .then((data) => {
        setScoreData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {scoreData && (
        <div className="scorecard">
          <div className="container">
            <h4>
              <b>{scoreData.data.averageScore}</b>
              <span className="remark">{scoreData.data.grade}</span>
            </h4>
            <p>Total Score</p>
          </div>
          <hr />
          <div className="scores">
            <div className="flexbox-container">
              <div className="scoreboxblue">
                <h3>{scoreData.data.assessment}</h3> Assessment
              </div>
              <div className="scoreboxblue">
                <h3>{scoreData.data.mockProject}</h3> Mock Project
              </div>
              <div className="scoreboxgreen">
                <h3>{scoreData.data.attendanceParticipation}</h3>
                Attendance & Participation
              </div>
              <div className="scoreboxgreen">
                <h3>{scoreData.data.timeManagement}</h3> Time Management
              </div>
              <div className="scoreboxgreen">
                <h3>{scoreData.data.communicationSkill}</h3>
                Communication Skills
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}