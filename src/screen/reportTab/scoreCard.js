import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    padding: "4vh",
    margin: "auto",
    fontWeight: "500",
    backgroundColor: theme.palette.grey[200],
    color: "#0e4d94",
    [theme.breakpoints.down("md")]: {
      padding: "3vh",
      fontSize: "4vh",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2vh",
      fontSize: "3vh",
    },
  },
  boldText: {
    fontWeight: "bold",
  },
  of4: {
    fontSize: "100%",
    fontWeight: "500",
  },
  scorecard: {
    boxShadow: "0px 1px 3px #c2c1c1",
    border: "2px solid #D9DAE4",
    margin: "2%",
    borderRadius: "15px !important",
    width: "96%",
    height: "31vh",
    [theme.breakpoints.down("md")]: {
      width: "48%",
      margin: "1%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "2%",
    },
  },
  container: {
    color: "#0e4d94",
    padding: "1px",
  },
  box1: {
    display: "flex",
    justifyContent: "space-between",
  },
  averageScore: {
    fontSize: "5vh",
    fontWeight: "500",
    marginTop: "0%",
    marginRight: theme.spacing(1),
  },
  remark: {
    padding: "1.7%",
    fontSize: "3vh",
    float: "right",
    textAlign: "right",
    fontWeight: "400",
  },
  scores: {
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  scoreBox: {
    color: "white",
    fontSize: "small",
    fontWeight: "bold",
    margin: "auto",
    padding: "1.5%",
    boxShadow: "0 0 2px 1px #c2c1c1",
    height: "13vh",
    width: "19%",
    textAlign: "center",
  },
  scoreboxBlue: {
    backgroundColor: "#0D4896",
    paddingBottom: "2vh",
  },
  scoreboxGreen: {
    backgroundColor: "#068955",
    paddingBottom: "2vh",
  },
}));


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
        //<Card className="scorecard">
        <Card className={classes.scorecard}>
          <CardContent>
            {/* <div className="container"> */}
            <div className={classes.container}>
              <div>
                {/* <Typography variant="h2" className="averageScore"> */}
                <Typography variant="h2" className={classes.averageScore}>
                  {scoreData.data.averageScore}

                  {/* <Typography variant="span" className="of4"> */}
                  <Typography variant="span" className={classes.of4}>
                    {" of 4"}
                  </Typography>
                  {/* <Typography variant="body" className="remark"> */}
                  <Typography variant="body" className={classes.remark}>
                    {scoreData.data.grade}
                  </Typography>
                </Typography>
              </div>
              
              {/* <div className="box1"> */}
              <div className={classes.box1}>
                <div>
                  <Typography variant="subtitle1">Total Score</Typography>
                </div>
                <div></div>
              </div>
            </div>
            <hr />
            {/* <div className="scores"> */}
            <div className={classes.scores}>
              {scoreBoxes.map((scoreBox, index) => (
                // <div key={index} className={`scoreBox scorebox${scoreBox.color}`}>
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