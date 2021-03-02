import React from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import { Route, RouteToString } from '../../routes/paths';

type LinkProps = Omit<ReactRouterLinkProps & { path: Route }, 'to'>;

export const Link = ({ path, ...props }: LinkProps) => {
  return(
    <ReactRouterLink {...props} to={RouteToString(path)} />
  );
};