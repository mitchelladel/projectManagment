import React from "react";
import App from "../../App";
import "@testing-library/jest-dom";
import { PROJECTS } from "../../lib/data";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import ControlPanel from "../ControlPanel";

test("Launch Button Context", async () => {
  render(<ControlPanel />);
  expect(screen.getAllByTestId("launchButton")[0]).toHaveTextContent(
    "Launch Project"
  );
});

test("Finish Button Context", async () => {
  render(<ControlPanel />);
  expect(screen.getAllByTestId("finishButton")[0]).toHaveTextContent(
    "Finnish Project"
  );
});
test("Rendering Projects in initial state ", async () => {
  render(<App />);
  PROJECTS.map((project) => {
    expect(screen.getAllByTestId(`${project.id}`)[0]).toHaveTextContent(
      `${project.name}`
    );
  });
});
