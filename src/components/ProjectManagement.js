import React, { useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";
import { PROJECTS } from "../lib/data";
import ProjectListPanel from "./ProjectListPanel";

const ProjectManagement = () => {
  const [projects, setProjects] = useState({});

  const getBorderStyle = (state) => {
    switch (state) {
      case "Finished":
        return "thick solid red";
      case "Not started":
        return "thick solid green";
      case "Launched":
        return "thick solid yellow";
      default:
        break;
    }
    return "";
  };

  useEffect(() => {
    const proj = {};
    for (const projectItem of PROJECTS) {
      proj[projectItem.id] = {
        ...projectItem,
        style: {
          backgroundColor: "white",
          borderRight: getBorderStyle(projectItem.state),
        },
      };
    }
    setProjects(proj);
  }, []);

  const handleChangeState = (newState) => {
    const proj = {};
    for (const [id, projectItem] of Object.entries(projects)) {
      proj[id] = {
        ...projectItem,
        style: {
          ...projectItem.style,
          backgroundColor: "white",
          color: "black",
        },
      };
      if (projectItem.style.backgroundColor === "blue") {
        proj[id].state = newState;
        proj[id].style.borderRight = getBorderStyle(proj[id].state);
      }
    }
    setProjects(proj);
  };

  const handleOnchange = (project) => {
    if (project.state === "Finished") {
      return;
    }

    const projectItem = Object.entries(projects)
      .map(([id, activeProjValue]) => activeProjValue)
      .find(
        (activeProjValue) => activeProjValue.style.backgroundColor === "blue"
      );

    if (projectItem != null && projectItem.state !== project.state) {
      return;
    }

    const color = project.style.backgroundColor === "white" ? "blue" : "white";
    const fontColor = project.style.color === "white" ? "black" : "white";
    setProjects({
      ...projects,
      [project.id]: {
        ...project,
        style: { ...project.style, backgroundColor: color, color: fontColor },
      },
    });
  };

  const activeProj = Object.entries(projects)
    .map(([activeProjkey, activeProjValue]) => activeProjValue)
    .find(
      (activeProjValue) => activeProjValue.style.backgroundColor === "blue"
    );
  const currentState = activeProj != null ? activeProj.state : null;

  return (
    <>
      <ProjectListPanel
        projects={Object.entries(projects).map(
          ([activeProjkey, activeProjValue]) => activeProjValue
        )}
        onItemClick={(project) => handleOnchange(project)}
      />

      <div>
        <ControlPanel
          launchButtonActive={currentState === "Not started"}
          finishButtonActive={currentState === "Launched"}
          handleLaunch={() => handleChangeState("Launched")}
          handleFinish={() => handleChangeState("Finished")}
        />
      </div>
    </>
  );
};

export default ProjectManagement;
