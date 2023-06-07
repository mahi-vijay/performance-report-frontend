import React from "react";
import "./styles/WeekCard.css";
import moment from 'moment';

function WeekCard({ weekData }) {
  const {
    weekId,
    startingDate,
    endingDate,
    assignment,
    mentorFeedbacks,
    timeManagement,
    overallAssessment,
    communicationSkill,
    attendanceParticipation,
  } = weekData;
 

  return (
    <div className="weekcard">
      <div className="container">
        <h4>
          Week {weekId}
          <span className="weekdate">
            {moment(startingDate).format('MMMM Do YYYY')} - {moment(endingDate).format('MMMM Do YYYY')}
            {/* {startingDate} - {endingDate} */}
          </span>
        </h4>
      </div>
      <hr />
      <div className="scores">
        <div className="flexbox-container">
          <div className="scorebox">Assignment: {assignment}</div>
          <div className="scorebox">Overall Assessment:{overallAssessment}</div>
          <div className="scorebox">Assignment:{assignment}</div>
          <div className="scorebox">
            Attendance & Participation:{attendanceParticipation}
          </div>
          <div className="scorebox">Time Management:{timeManagement}</div>
          <div className="scorebox">
            Communication Skills:{communicationSkill}
          </div>
        </div>
        <hr />
        <div className="mentorfeedback">
          <h6>Mentor's Feedback</h6>
          {mentorFeedbacks.map((feedback, index) => (
            <p key={index}>{feedback}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeekCard;