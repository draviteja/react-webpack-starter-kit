var React = require('react');
var ReactDOM = require('react-dom');
require('./style.css')
import HelloWorld from './components/Hello';

ReactDOM.render(
  <HelloWorld />, document.getElementById('app')
);
