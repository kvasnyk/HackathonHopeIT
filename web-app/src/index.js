import './styles/app.scss';

import AppContainer from './components/app/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

//import registerServiceWorker from './registerServiceWorker'; #TODO# do we really need this one?

ReactDOM.render(<AppContainer />, document.getElementById('root'));
//registerServiceWorker(); #TODO# do we really need this one?