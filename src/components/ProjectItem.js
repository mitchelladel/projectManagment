import { Button } from "@material-ui/core";

const ProjectItem = ({ onClick, project }) => {
  return (
    <Button
      id={`${project.id}`}
      key={project.id}
      variant="outlined"
      style={project.style}
      onClick={onClick}
    >
      <div data-testid={`${project.id}`}>
        {" "}
        {project.name}
        <br />
        {project.state}
      </div>
    </Button>
  );
};

export default ProjectItem;
