
import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

 function Heading() {
  const classes = useStyles();

  return (
    <Box className={classes.headerBox}>
      <Typography variant="h4" className={classes.boldText} >Performance Report</Typography>
    </Box>
  );
}

export default Heading;
