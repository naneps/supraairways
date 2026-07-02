import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const mount = document.querySelector('#root');
createRoot(mount).render(React.createElement(App));
