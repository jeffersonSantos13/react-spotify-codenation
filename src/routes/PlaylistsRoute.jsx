import React from 'react';
import { Playlists } from '../containers';

import { usePlayList } from '../utils/hooks';

const PlaylistsRoute = ({ path }) => {
  const { content, categoryId, getContentNameById } = usePlayList();

  return (
    <Playlists
      categoryId={categoryId}
      categoryName={getContentNameById(categoryId, content.categories)}
      data={content.playlists}
      isLoading={content.status === 'running' && content.playlists.length === 0}
      path={path}
    />
  );
}

export default PlaylistsRoute;