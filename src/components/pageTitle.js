import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


// import { makeStyles } from "@material-ui/core/styles";

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
    weekbox: {
      color: "black",
      fontWeight: "100",
      margin: "1vh 0.5vh",
      padding: "3%",
      border: "1px solid #D9DAE4",
      height: "14vh",
      width: "calc(18% - 4px)",
      textAlign: "center",
      flexGrow: 2,
      [theme.breakpoints.up("md")]: {
        flexBasis: "20%",
        margin: "1vh 0.5vh",
      },
      [theme.breakpoints.up("lg")]: {
        flexBasis: "20%",
        margin: "1vh 0.5vh",
      },
    },
}));
export default function PageTitle(data) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Box className={classes.headerBox}>
          <Typography variant="h4" className={classes.boldText}>
            {data.title}
          </Typography>
        </Box>
        <hr />
      </div>
    </>
  );
}
