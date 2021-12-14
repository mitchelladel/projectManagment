import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ProjectManagement from "./components/ProjectManagement";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },

  content: {
    display: "block",
    maxWidth: "100%",
    width: "1120px",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 style={{ textAlign: "center" }}> Project Managment</h1>
        <ProjectManagement />
      </div>{" "}
    </div>
  );
};

export default App;
