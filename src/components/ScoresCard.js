import "./styles/ScoresCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import React from "react";

export default function ScoresCard() {
  return (
    <>
      <div class="scorecard">
        <div class="container">
          <h4>
            <b>3.39 of 4</b>
            <span class="remark">Always target</span>
          </h4>
          <p>Total Score</p>
        </div>
        <hr />
        <div class="scores">
          <div class="flexbox-container">
            <div class="scoreboxblue">Assessment</div>
            <div class="scoreboxblue">Mock Project</div>
            <div class="scoreboxgreen">Attendance & Participation</div>
            <div class="scoreboxgreen">Time Management</div>
            <div class="scoreboxgreen">Communication Skills</div>
          </div>
        </div>
      </div>
    </>
  );
}
