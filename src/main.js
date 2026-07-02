import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './styles/app.css';
import './styles/landing.css';
import './styles/about.css';
import './styles/investor.css';

const mount = document.querySelector('#root');
createRoot(mount).render(React.createElement(App));
