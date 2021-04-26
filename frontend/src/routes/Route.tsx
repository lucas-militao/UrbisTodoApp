import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
  Router,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import HomePage from '../pages/HomePage';
import SignIn from '../pages/SignIn';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate === !!user) {
          return <Component />;
        }
        Component = isPrivate ? SignIn : HomePage;

        return <Component />;
      }}
    />
  );
};

export default Route;
