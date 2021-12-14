import ProjectItem from "./ProjectItem";
import { ButtonGroup, Grid } from "@material-ui/core";

const ProjectListPanel = ({ projects, onItemClick }) => {
  return (
    <div>
      <Grid style={{ justifyContent: "center" }} container>
        <div>
          <ButtonGroup size="large" orientation="vertical">
            {projects.map((project) => {
              return (
                <ProjectItem
                  project={project}
                  onClick={() => onItemClick(project)}
                />
              );
            })}
          </ButtonGroup>
        </div>
      </Grid>
    </div>
  );
};

export default ProjectListPanel;
