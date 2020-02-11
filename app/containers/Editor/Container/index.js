import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';
import { Grid, GridColumn } from 'semantic-ui-react';
import Settings from '../Settings';
import Canvas from '../Canvas';
import SideBar from '../SideBar';
import LandingPage from '../LandingPage';
import SavePresentation from '../../SavePresentation';
import LoadPresentation from '../../LoadPresentation';
import { selectIsReady } from '../redux-store/selectors';

export function Container({ isReady }) {
  return (
    <div>
      {isReady ? (
        <div className="container">
          <Grid>
            <GridColumn className="settings">
              <Settings />
            </GridColumn>
            <GridColumn className="sidebar">
              <SideBar />
            </GridColumn>
            <GridColumn className="canvas">
              <Canvas />
            </GridColumn>
          </Grid>
          <SavePresentation />
        </div>
      ) : (
        <div className="themeSelector">
          <div className="inside">
            <LandingPage />
            <LoadPresentation />
          </div>
        </div>
      )}
    </div>
  );
}

Container.propTypes = {
  isReady: PropTypes.bool,
};

export default connect(
  state => ({
    isReady: selectIsReady(state),
  }),
  null,
)(Container);
