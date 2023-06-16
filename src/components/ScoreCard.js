import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function ScoreCard({ scoreData }) {
  const classes = useStyles();

  const scoreBoxes = [
    { label: "Assessment", dataKey: "assessment", color: "Blue" },
    { label: "Mock Project", dataKey: "mockProject", color: "Blue" },
    { label: "Attendance & Participation", dataKey: "attendanceParticipation", color: "Green" },
    { label: "Time Management", dataKey: "timeManagement", color: "Green" },
    { label: "Communication Skills", dataKey: "communicationSkill", color: "Green" },
  ]; //move it to one file and import

  return (
    <>
      {scoreData && (
        <Card className={classes.scorecard}>
          <CardContent>
            <div className={classes.container}>
              <div>
                <Typography>
                  <span className={classes.averageScore}>{scoreData.data.averageScore}</span>
                  <span className={classes.of4}>of 4</span>
                  <Typography variant="body" className={classes.remark}>
                    {scoreData.data.grade}
                  </Typography>
                </Typography>
              </div>
              <div className={classes.box1}>
                <div>
                  <Typography variant="subtitle1">Total Score</Typography>
                </div>
                <div></div>
              </div>
            </div>
            <hr />
            <div className={classes.scores}>
              {scoreBoxes.map((scoreBox, index) => (
                <div key={index} className={`${classes.scoreBox} ${classes[`scorebox${scoreBox.color}`]}`}>
                  <Typography variant="h5">{scoreData.data[scoreBox.dataKey]}</Typography>
                  <Typography variant="subtitle1">{scoreBox.label}</Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
