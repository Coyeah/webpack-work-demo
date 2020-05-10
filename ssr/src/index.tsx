/*
 * @Author: ye.chen
 * @Date: 2020-04-15 15:06:10
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-05-09 16:55:35
 */
const React = require('react');
const ReactDOM = require('react-dom');
require('./index.less');
const App = require('./App').default;

if (typeof document === 'undefined') {
  module.exports = <App />;
} else {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
  // ReactDOM.render(<App />, document.getElementById('root'));
}
