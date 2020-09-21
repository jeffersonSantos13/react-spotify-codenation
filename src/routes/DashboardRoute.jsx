import React from 'react';
import { Switch } from 'react-router-dom';

import { WelcomeBox } from '../components';

import {
  Categories,
  Dashboard,
  PrivateRoute,
  Topbar,
} from '../containers';

import PlaylistsRoute from './PlaylistsRoute';
import TracksRoute from './TracksRoute';

import { useDashboard } from '../utils/hooks';

const DashboardRoute = () => {
  const { content, path, url, user } = useDashboard();

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />

          <Categories
            isLoading={content.status === 'running' && content.categories.length === 0}
            data={content.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  )
}

export default DashboardRoute;
