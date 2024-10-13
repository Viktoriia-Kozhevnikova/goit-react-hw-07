import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '/src/redux/store.js';
import '/src/index.css';
import App from '/src/App.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);