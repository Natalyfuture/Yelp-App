import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterApp from './components/RouterApp';
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Provider store={store}>
          <RouterApp />
        </Provider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

