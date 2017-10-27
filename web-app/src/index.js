import './index.css';

import AppContainer from './components/app/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
