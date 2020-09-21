import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCategoryPlaylistFailed,
  getCategoryPlaylistRequest,
  getCategoryPlaylistSuccess,
  logout,
} from '../../store/actions';

import { endpoints } from '../../modules/endpoints';
import { request, sanitizeUrl } from '../../modules/request';
import { getContentNameById } from '../../modules/helpers';

const { getCategoryPlaylists } = endpoints;

const usePlayList = () => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    const requestOptions = {
      ...getCategoryPlaylists.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getCategoryPlaylistRequest());

    request(sanitizeUrl(getCategoryPlaylists.url,{ categoryId }), requestOptions)
      .then(data => dispatch(getCategoryPlaylistSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());

          return;
        }

        dispatch(getCategoryPlaylistFailed(error));
      });
  }, [auth, categoryId, dispatch]);

  return {
    content,
    categoryId,
    getContentNameById,
  };
}

export default usePlayList;