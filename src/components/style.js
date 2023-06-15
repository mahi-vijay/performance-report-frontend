import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  headerBox: {
    padding: "6vh",
    margin: "auto",
    fontWeight: "1200",
    backgroundColor: theme.palette.grey[200],
    color: "#0e4d94",
    [theme.breakpoints.down("sm")]: {
      padding: "2vh",
      fontSize: "3.2vh",
    },
  },
  boldText: {
    fontWeight: "bold",
  },

of4:{
  fontSize:"50%"
},
  scorecard: {
      boxShadow: "0 1px 2px 1px #c2c1c1",
      margin: "2%",
      padding: " 0.5%",
      borderRadius: "15px",
      width: "96%",
      height: "49vh",
  
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    container: {
      color: "#0e4d94",
      padding: "0 0.5%",
    },
    box1: {
      display: "flex",
      justifyContent: "space-between",
      //paddingBottom:"10px",
    },
    averageScore: {
      fontSize: "80%",
      margin:"0",
    //   fontWeight: "bold",
      marginRight: theme.spacing(1),
    },
    remark: {
      //fontSize: "17px",
      fontSize: "3.5vh",
      float: "right",
      textAlign: "right",
      fontWeight: "bold",
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
      margin: "auto",
      padding: "1.5%",
      boxShadow: "0 0 2px 1px #c2c1c1",
      height: "19vh",
      width: "19%",
      textAlign: "center",
    },
    scoreboxBlue: {
      backgroundColor: "#0D4896",
      paddingBottom: "2vh"
    },
    scoreboxGreen: {
      backgroundColor: "#068955",
      paddingBottom: "2vh"
    },

// #0D4896 // blue
// #068955

    weekbox: {
      color: "black",
        fontSize: "small",
        margin: "2vh",
        padding: "2%",
        boxShadow: "0 0 2px 1px #c2c1c1",
        border: "1px solid #D9DAE4",
        height: "17vh",
        width: "calc(18% - 4px)",
        textAlign: "center",
  
      [theme.breakpoints.down("sm")]: {
        width: "30%",
      },
    },
    weekcard: {
        color: "#0D4896",
        justifyContent: "center",
        display: "inline-block",
        boxShadow: "0 0 2px 1px #c2c1c1",
        padding: "2%",
        marginTop: "0%",
        marginBottom: "2%",
        marginLeft: "2%",
        width: "calc(47% - 0%)",
        borderRadius: "15px",
    
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          marginInline: "0%",
        },
      },
      weekname: {
        fontSize: "27.0.5px", 
      },
      weekdate: {
        fontSize: "medium",
        padding: "1%",
        float: "right",
        textAlign: "right",
      },
      flexboxContainer: {
        display: "flex",
        flexWrap: "rap",
        justifyContent: "space-between",
        flexDirection: "row",
      },
      subtitle: {
        fontSize: "1.8vh", 
        justifyContent: "center",
      },
      feedback: {
        marginTop: theme.spacing(2),
      },
      feedbackIcon: {
        color: "#0e4d94",
        marginRight: "1%",
        padding: "auto",
      },

  }));

  export default useStyles;
  
  