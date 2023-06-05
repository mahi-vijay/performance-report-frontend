import React from "react";
import "./styles/WeeksCard.css";

export default function WeeksCard() {
  return (
    <>
      <div class="dispweek">
        <div class="weekcard">
          <div class="container">
            <h4>
              Week 1<span class="weekdate">Ist May 2023 - 5th May 2023</span>
            </h4>
          </div>
          <hr />
          <div class="scores">
            <div class="flexbox-container">
              <div class="scorebox">Overall Assessment</div>
              <div class="scorebox">Assignment</div>
              <div class="scorebox">Attendance & Participation</div>
              <div class="scorebox">Time Management</div>
              <div class="scorebox">Communication Skills</div>
            </div>
            <hr />
            <div class="mentorfeedback">
              <h6>Mentor's Feedback</h6>
              <p>
                Good knowledge with technical skills, have problem solving
                skills.
              </p>
            </div>
          </div>
        </div>

        <div class="weekcard">
          <div class="container">
            <h4>
              Week 1<span class="weekdate">Ist May 2023 - 5th May 2023</span>
            </h4>
          </div>
          <hr />
          <div class="scores">
            <div class="flexbox-container">
              <div class="scorebox">Overall Assessment</div>
              <div class="scorebox">Assignment</div>
              <div class="scorebox">Attendance & Participation</div>
              <div class="scorebox">Time Management</div>
              <div class="scorebox">Communication Skills</div>
            </div>
            <hr />
            <div class="mentorfeedback">
              <h6>Mentor's Feedback</h6>
              <p>
                Good knowledge with technical skills, have problem solving
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
