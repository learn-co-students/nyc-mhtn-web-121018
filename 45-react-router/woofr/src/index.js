import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from "react-router-dom";

// setup
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

serviceWorker.unregister();
