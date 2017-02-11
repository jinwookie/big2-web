const routes = [
  {
    path: 'create',
    getComponent: (location, cb) => {
      System.import('containers/orders/OrderEdit')
        .then(module => cb(null, module.default));
    }
  },
  {
    path: 'edit/:id',
    getComponent: (location, cb) => {
      System.import('containers/orders/OrderEdit')
        .then(module => cb(null, module.default));
    }
  }
];

/*const routes = [
  {
    path: 'create',
    component: OrderEdit,
    action: 'create'
  },
  {
    path: 'edit/:id',
    component: OrderEdit,
    action: 'edit'
  }
];*/

export default routes;
