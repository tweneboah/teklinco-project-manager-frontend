import React from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const ProjectListItem = (props) => {
  const { project, history } = props;

  const goToProjectDashboard = () => {
    history.push(`/project/dashboard/${project.id}`);
  };
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={goToProjectDashboard}>
        View Dashboard
      </Button>
    </div>
  );
};

export default withRouter(ProjectListItem);
