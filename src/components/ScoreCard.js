import "./styles/ScoreCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import React, { useEffect, useState } from "react";

export default function ScoreCard() {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.npoint.io/9a77dd9e14cbab0c0bff")
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched data in the state
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
                Assessment: {scoreData.data.assessment}
              </div>
              <div className="scoreboxblue">
                Mock Project: {scoreData.data.mockProject}
              </div>
              <div className="scoreboxgreen">
                Attendance & Participation:{" "}
                {scoreData.data.attendanceParticipation}
              </div>
              <div className="scoreboxgreen">
                Time Management: {scoreData.data.timeManagement}
              </div>
              <div className="scoreboxgreen">
                Communication Skills: {scoreData.data.communicationSkill}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}