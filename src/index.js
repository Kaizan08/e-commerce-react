import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Cues from './components/Cues';
import Cases from './components/Cases';
import Accessories from './components/Accessories';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Route exact path='/' component={App}/>
            <Route path='/cases' component={Cases}/>
            <Route path='/accessories' component={Accessories}/>
            <Route path='/cues' component={Cues}/>
        </BaseLayout>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
