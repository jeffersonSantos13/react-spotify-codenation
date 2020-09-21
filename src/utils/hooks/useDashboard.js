import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import {
  getCategoriesFailed,
  getCategoriesRequest,
  getCategoriesSuccess,
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout,
} from '../../store/actions';

import { endpoints } from '../../modules/endpoints';
import { request } from '../../modules/request';

const { getCategories, getUserProfile } = endpoints;

const useDashboard = () => {
  const { auth, content, user } = useSelector(state => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getUserProfile.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getUserRequest());

    request(getUserProfile.url, requestOptions)
      .then(data => dispatch(getUserSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());

          return;
        }

        dispatch(getUserFailed(error));
      });

  }, [auth, dispatch]);

  useEffect(() => {
    const requestOptions = {
      ...getCategories.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getCategoriesRequest());

    request(getCategories.url, requestOptions)
      .then(data => dispatch(getCategoriesSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout());

          return;
        }

        dispatch(getCategoriesFailed(error))
      });

  }, [auth, dispatch]);

  return {
    content,
    user,
    path,
    url,
  };
}

export default useDashboard;