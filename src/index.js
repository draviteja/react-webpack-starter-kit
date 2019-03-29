import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';
import HelloWorld from './components/Hello';

//this is entry point
ReactDOM.render(
  <HelloWorld />, document.getElementById('app')
);
