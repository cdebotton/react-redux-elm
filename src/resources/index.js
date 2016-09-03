import 'isomorphic-fetch';
import boot from './boilerplate';

const run = boot('app');
const start = () => run(
  require('./app/view').default,
  require('./app/updater').default
);

if (module.hot) {
  module.hot.accept('./app/view', start);
  module.hot.accept('./app/updater', start);
}

start();
