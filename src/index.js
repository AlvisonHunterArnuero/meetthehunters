import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from "./reducers";
import {Provider} from "react-redux";


const myStore = createStore(rootReducer);

ReactDOM.render(
<Provider store={myStore}>
    <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
