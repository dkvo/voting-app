import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleWare} from 'redux';
import './styles/app.scss';

ReactDom.render(
    <div> hello world</div>
, document.querySelector('.container'));