const routes = [
  {
    path: 'create',
    getComponent: (location, cb) => {
      System.import('containers/games/GamesCreate')
        .then(module => cb(null, module.default));
    }
  },
  {
    path: 'edit/:id',
    getComponent: (location, cb) => {
      System.import('containers/games/GamesEdit')
        .then(module => cb(null, module.default));
    }
  }
];

export default routes;
