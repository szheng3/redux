import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './components/store/ConfigureStore';
import {Provider} from 'react-redux';


ReactDOM.render(<Provider store={configureStore()}><AppRouter/></Provider>, document.getElementById('app'));
