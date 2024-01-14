import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import Gopi from './components/netflixreistercomponent';
import Netflixindexcomponent from './components/netflixindexcomponent';
import Databinding from './components/databindingcomponent';
import reportWebVitals from './reportWebVitals';
import Twowaybinding from './components/twowaybinding';
import Hellojohn from './components/hellojohn';
import Classcomponent from './components/classcomponent';
import Classcomponentsshoppig from './components/classcompoentsshoppig';
import Props from './components/props';
import Nasa from './components/Nasa';
import Formik from './components/formik';
import Formikformvalidation from './components/formikformvalidation';
import Formyup from './components/formyup';
import Yupcomponent from './components/yupcomponent';
import Lifecycle from './components/lifecycle';
import Usecontext from './components/usecontext';
import { CookiesProvider } from 'react-cookie';
import Cookie from './components/cookie';
import ReducerDemo from './components/usereducer';
import Usereducer2 from './components/usereducer2';
import JAjaxDemo from './components/JAjaxDemo';
import Ishopp from './ishop/ishopindex';
import Maincomponent from './Bank/maincomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Ishopp />
  </React.StrictMode>
   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
