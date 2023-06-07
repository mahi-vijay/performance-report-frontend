import React from "react";
import "./styles/WeekCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
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
            </span>
        </h4>
      </div>
      <hr />
      <div className="scores">
        <div className="flexbox-container">
          <div className="scorebox">
            <h5>{overallAssessment}</h5>
            Overall Assessment
          </div>
          <div className="scorebox">
            <h5>{assignment}</h5> Assignment
          </div>
          <div className="scorebox">
            <h5>{attendanceParticipation}</h5>
            Attendance & Participation
          </div>
          <div className="scorebox">
            <h5>{timeManagement}</h5>
            Time Management
          </div>
          <div className="scorebox">
            <h5>{communicationSkill}</h5>
            Communication Skills
          </div>
        </div>
        <hr />
        <div className="mentorfeedback">
          <h6>
            <FontAwesomeIcon className="feedbackIcon" icon={faCommentAlt} />
            <span> </span>
            Mentor's Feedback
          </h6>
          <p>{mentorFeedbacks.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default WeekCard;