import React, { useEffect } from "react";
import ProjectListItem from "./ProjectListItem";
import { connect } from "react-redux";
import { fetchAllProjects } from "../../redux/actions/projects/projectsActions";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const ProjectLists = (props) => {
  const { fetchAllProjects, projects, fetchAllExpenses } = props;
  useEffect(() => {
    fetchAllProjects();
  }, [fetchAllProjects, fetchAllExpenses]);

  // Go to Add project page
  const goToCreateProject = () => {
    props.history.push("/projects/create-project");
  };
  return (
    <div>
      {projects.projects === [] ? (
        <LoadingComponent />
      ) : (
        <div>
          <h1>Project List</h1>
          <hr />
          <Button
            variant="outlined"
            color="primary"
            onClick={goToCreateProject}>
            Add Project
          </Button>
          {projects.projects.map((project) => {
            return (
              <div key={project.id}>
                <ProjectListItem project={project} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
};
const actions = {
  fetchAllProjects
};

export default withRouter(connect(mapStateToProps, actions)(ProjectLists));
