import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const ControlPanel = ({
  launchButtonActive,
  finishButtonActive,
  handleFinish,
  handleLaunch,
}) => {
  return (
    <div>
      {" "}
      <Grid style={{ justifyContent: "center" }} container>
        <Grid item xs={6}>
          <Button
            onClick={handleLaunch}
            color="primary"
            disabled={!launchButtonActive}
          >
            <div data-testid="launchButton">Launch Project</div>
          </Button>
          <Button
            onClick={handleFinish}
            color="primary"
            disabled={!finishButtonActive}
          >
            <div data-testid="finishButton">Finnish Project</div>
          </Button>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

ControlPanel.propTypes = {
  launchButtonActive: PropTypes.bool,
  finishButtonActive: PropTypes.bool,
  handleFinish: PropTypes.func,
  handleLaunch: PropTypes.func,
};

ControlPanel.defaultProps = {
  launchButtonActive: false,
  finishButtonActive: false,
  handleLaunch: () => {},
  handleFinish: () => {},
};

export default ControlPanel;
