import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// index.js
import HelloMessage from './Hello';
ReactDOM.render(<HelloMessage name="John"/>, document.getElementById('root'));
registerServiceWorker();
