import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import routes from 'routes';
import { createAppStore } from 'store';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  serve(req, res);
});

app.get('/*', (req, res) => {
  serve(req, res);
});

function serve(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error)
      return res.status(500).send(error.message);
    else if (redirectLocation)
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    else if (renderProps) {
      const store = createAppStore();
      console.log(renderProps);
      let state = store.getState();

      let htmlString = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      if (renderProps.components.length > 1) {
        const component = renderProps.components[renderProps.components.length-1];

        if (component.fetchData) {
          return component.fetchData({ dispatch: store.dispatch, params: renderProps.params, location: renderProps.location, routes: renderProps.routes })
            .then(() => {
              state = store.getState();
              htmlString = renderToString(
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              );
              return res.render('index', { htmlString, initialState: state });
            })
            .catch(() => res.render('index', { htmlString }));
        }
      }

      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      /*const htmlString = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );*/
      res.render('index', { htmlString: htmlString, initialState: state });
    }
    else
      return res.status(404).send('Not found');
  });
}

function renderPage(store, renderProps) {
  const state = store.getState();

  let htmlString = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );
}

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
