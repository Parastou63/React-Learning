import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle='People Manager'/>, document.getElementById('root'));
registerServiceWorker();
