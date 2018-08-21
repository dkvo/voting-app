import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import './styles/app.scss';
import Home from './components/home';
import NavBar from './components/navbar';
import Register from './containers/register'
import Poll from './containers/poll';
import DashBoard from './containers/dashboard';

const createStoreWithMiddleWare = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store ={createStoreWithMiddleWare(reducers)}> 
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/register' component={Register}/>
                        <Route path='/dashboard'component={DashBoard}/>
                        <Route path='/poll/:id' component={Poll}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    </Provider>
, document.querySelector('.root'));