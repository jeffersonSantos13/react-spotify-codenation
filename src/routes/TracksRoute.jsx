import React from 'react';
import { Tracks } from '../containers';

import { useTrack } from '../utils/hooks';

const TracksRoute = ({ path }) => {
  const {content, categoryName } = useTrack();

  return (
    <Tracks
      categoryName={categoryName}
      data={content.tracks}
      isLoading={content.status === 'running'}
      path={path}
    />
  );
}

export default TracksRoute;