import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Description from "./components/Description";
ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
             <Route path='/:products/:id' component={Description}/> 
             <Route path='/:id' component={Products}/> 
        </Switch>
        </BaseLayout>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
