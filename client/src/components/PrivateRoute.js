import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BubblesPage from './BubblePage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route { ...rest } render={() => {
      if (localStorage.getItem('token')) {
        return <BubblesPage />
      } else {
        return <Redirect to="/login" />
      }
    }} />
  );
};

export default PrivateRoute;