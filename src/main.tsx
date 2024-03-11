import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import './index.css';
import { saveState } from './utils/localStorage.ts';

store.subscribe(() => {
  saveState(store.getState().cart);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
