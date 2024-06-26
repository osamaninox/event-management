import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './views/auth/AuthContext';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import * as action from './redux/actions/actions'
// store.dispatch(action.bugResolved(1));
// store.dispatch({
//    type:"BugAdded",
//    payload:{
//     description:"Bug1"
//    }
// })
// console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
          <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
