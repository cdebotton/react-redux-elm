import 'isomorphic-fetch';
import boot from './boilerplate';
import view from './App/view';
import updater from './App/updater';

const run = boot('app');
const start = () => run(
  require('./App/view').default,
  require('./App/updater').default
);

if (module.hot) {
  module.hot.accept('./App/view', start);
  module.hot.accept('./App/updater', start);
}

start();
