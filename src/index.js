import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { App } from './App';
// import { Todos } from './components/Todos';
import { LoginForms } from './components/LoginForms'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <LoginForms />
  </StrictMode>
);


