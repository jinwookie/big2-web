import { AppContainer, NoMatch } from 'containers/app';

function loadRoute(cb) {
  return module => cb(null, module.default);
}

const rootRoute = {
  path: '/',
  component: AppContainer,
  childRoutes: [
    {
      path: 'players',
      getIndexRoute: (partialNextState, cb) => {
        System.import('containers/players/PlayerIndex')
          .then(module => cb(null, { component: module.default }));
      },
      getChildRoutes: (partialNextState, cb) => {
        System.import('./players')
          .then(loadRoute(cb));
      }
    },
    {
      path: 'games',
      getIndexRoute: (partialNextState, cb) => {
        System.import('containers/games/GamesIndex')
          .then(module => cb(null, { component: module.default }));
      },
      getChildRoutes: (partialNextState, cb) => {
        System.import('./games')
          .then(loadRoute(cb));
      }
    },
    /*{
      path: 'orders',
      getIndexRoute: (partialNextState, cb) => {
        System.import('containers/orders/OrderIndex')
          .then(module => cb(null, { component: module.default }));
      },
      getChildRoutes: (partialNextState, cb) => {
        System.import('./orders')
          .then(loadRoute(cb));
      }
    },
    {
      path: 'products',
      getIndexRoute: (partialNextState, cb) => {
        System.import('containers/products/ProductIndex')
          .then(module => cb(null, { component: module.default }));
      },
      getChildRoutes: (partialNextState, cb) => {
        System.import('./products')
          .then(loadRoute(cb));
      }
    },*/
    {
      path: '/*',
      component: NoMatch
    }
  ]
};

export default rootRoute;
