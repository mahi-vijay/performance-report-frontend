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
    boxShadow: "0px 1px 8px #c2c1c1",
    margin: "2%",
    borderRadius: "15px",
    width: "96%",
    height: "34vh",
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
    //paddingBottom:"10px",
  },
  averageScore: {
    fontSize: "5vh",
    fontWeight: "500",
    marginTop: "0%",
    marginRight: theme.spacing(1),
  },
  remark: {
    //fontSize: "17px",
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
    margin: "1vh 0.5vh", // Adjusted the top and bottom margin values
    padding: "3%",
    border: "1px solid #D9DAE4",
    height: "14vh",
    width: "40%", // Adjusted width to fit 5 boxes in one line
    textAlign: "center",
    // boxSizing: "border-box", // Added box-sizing property

    [theme.breakpoints.down("sm")]: {
      width: "100%", // Adjusted width for small screens
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
    flexDirection: "inline",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  // weekbox: {
  //   color: "black",
  //   // fontSize: "small",
  //   fontWeight: "100",
  //   margin: "1vh",
  //   padding: "3%",
  //   border: "1px solid #D9DAE4",
  //   height: "14vh",
  //   // width: "calc(19% - 4px)",
  //   width: "200%",
  //   textAlign: "center",

  //   [theme.breakpoints.down("sm")]: {
  //     width: "30%",
  //   },
  // },
  // weekcard: {
  //   color: "#0D4896",
  //   justifyContent: "center",
  //   display: "inline-block",
  //   // boxShadow: "0 1px 5px 1px #c2c1c1",
  //   border: "1px solid #D9DAE4",
  //   padding: "1%",
  //   marginTop: "0%",
  //   marginBottom: "2%",
  //   marginLeft: "2%",
  //   width: "calc(47% - 0%)",
  //   borderRadius: "15px",

  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //     marginInline: "0%",
  //   },
  // },
  weekname: {
    fontSize: "3.5vh",
    color: "#0D4896",
  },
  // weekdate: {
  //   fontSize: "medium",
  //   padding: "1%",
  //   float: "right",
  //   textAlign: "right",
  // },
  h6: {
    color: "#0D4897",
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

  // flexboxContainer: {
  //   display: "flex",
  //   flexWrap: "rap",
  //   justifyContent: "space-between",
  //   flexDirection: "row",
  // },

  subtitle: {
    fontSize: "1.5vh",
    justifyContent: "center",
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
