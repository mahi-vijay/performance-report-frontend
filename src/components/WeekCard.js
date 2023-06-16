import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Box, Typography, Divider, Paper } from "@material-ui/core";
import useStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function WeekCard({ weekData }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
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
  //create util function
  const convertAssignmentScore = (assignmentScore) => {
    assignmentScore = assignmentScore / 2.5;
    return assignmentScore;
  };
  const getColor = (score) => {
    // Determine the background color and border color based on the score
    switch (true) {
      case score < 2.5 && score > 0:
        return { bgColor: "#F9DCDF", borderColor: "#E93820" }; // red

      case score < 3.25 && score >= 2.5:
        return { bgColor: "#F7E6B5", borderColor: "#E8B321" }; // yellow

      default:
        return { bgColor: "", borderColor: "" };
    }
  };

  const scoreBoxes = [
    { label: "Overall Assessment", score: overallAssessment },
    { label: "Assignment", score: assignment },
    { label: "Attendance & Participation", score: attendanceParticipation },
    { label: "Time Management", score: timeManagement },
    { label: "Communication Skills", score: communicationSkill },
  ];

  return (
    <Paper className={classes.weekcard}>
      <Box>
        <Typography variant="h4" className={classes.weekname}>
          Week {weekId}
          <span className={classes.weekdate}>
            {moment(startingDate).format("Do MMMM YYYY")} - {moment(endingDate).format("Do MMMM YYYY")}
          </span>
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.flexboxContainer}>
        {scoreBoxes.map((scoreBox, index) => {
          const { bgColor, borderColor } = getColor(scoreBox.score);
          return (
            <Box
              key={index}
              className={`${classes.weekbox} ${classes.border}`}
              style={{
                backgroundColor: bgColor,
                borderColor: borderColor,
                width: isSmallScreen ? "100%" : "30%",
              }}
            >
              <Typography variant="h5">{scoreBox.score}</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                {scoreBox.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Divider />
      <Box className={classes.feedback}>
        <Typography variant="h6" className={classes.mentorFeedback}>
          <FontAwesomeIcon className={classes.feedbackIcon} icon={faCommentAlt} />
          <span> </span>
          Mentor's Feedback
        </Typography>
        <Typography variant="body1">{mentorFeedbacks.join(". ")}</Typography>
      </Box>
    </Paper>
  );
}

export default WeekCard;
