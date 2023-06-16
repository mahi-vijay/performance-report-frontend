import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    padding: "4vh",
    margin: "auto",
    fontWeight: "500",
    backgroundColor: theme.palette.grey[200],
    color: "#0e4d94",
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
    borderRadius: "16px",
    width: "96%",
    height: "31vh",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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

  // #0D4896 // blue
  // #068955

  weekbox: {
    color: "black",
    fontWeight: "100",
    margin: "1vh 0.5vh",
    padding: "3%",
    border: "1px solid #D9DAE4",
    height: "14vh",
    width: "40%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  weekcard: {
    color: "#0D4896",
    justifyContent: "center",
    display: "inline-block",
    border: "1px solid #D9DAE4",
    padding: "1%",
    marginTop: "0%",
    marginBottom: "2%",
    marginLeft: "2%",
    width: "calc(47% - 0%)",
    borderRadius: "15px",
    boxSizing: "border-box",

    [theme.breakpoints.down("md")]: {
      width: "calc(50% - 2% - 4px)",
    },

    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 2% - 4px)",
      marginBottom: "2%",
    },
  },

  flexboxContainer: {
    display: "flex",
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  weekname: {
    fontSize: "3.5vh",
    color: "#0D4896",
  },

  weekdate: {
    fontSize: "medium",
    padding: "1%",
    float: "right",
    textAlign: "right",

    [theme.breakpoints.down("sm")]: {
      float: "none",
      textAlign: "left",
    },
  },

  subtitle: {
    fontSize: "1.5vh",
    justifyContent: "center",
  },
  mentorFeedback: {
    color: "#0D4897",
    fontSize: "2vh",
  },
  feedback: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  feedbackIcon: {
    color: "#0e4d94",
    marginRight: "1%",
    padding: "auto",
  },
}));

export default useStyles;
