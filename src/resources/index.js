import 'isomorphic-fetch';
import boot from './boilerplate';

const run = boot('app');
const start = () => run(
  require('./router/view').default,
  require('./router/updater').default
);

if (module.hot) {
  module.hot.accept('./router/view', start);
  module.hot.accept('./router/updater', start);
}

start();
