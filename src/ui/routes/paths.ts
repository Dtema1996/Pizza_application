import { UnreachableError } from '../types/errors';

export enum BaseRoute {
  HOME,
  SIZE,
  CRUST,
  TOPPINGS,
  CUSTOM,
}

export type Route =
 | { route: BaseRoute.HOME }
 | { route: BaseRoute.SIZE }
 | { route: BaseRoute.CRUST }
 | { route: BaseRoute.TOPPINGS }
 | { route: BaseRoute.CUSTOM };

export const RouteToString = (path: Route) => {
  switch(path.route) {
    case BaseRoute.HOME: {
      return '/';
    }
    case BaseRoute.SIZE: {
      return '/size';
    }
    case BaseRoute.CRUST: {
      return '/crust';
    }
    case BaseRoute.TOPPINGS: {
      return '/toppings';
    }
    case BaseRoute.CUSTOM: {
      return '/custom';
    }
    default: {
      throw new UnreachableError(path);
    }
  }
};