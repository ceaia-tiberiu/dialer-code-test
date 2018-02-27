import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dialer from './Dialer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dialer />, document.getElementById('root'));
registerServiceWorker();
