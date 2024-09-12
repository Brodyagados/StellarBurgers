import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import { createStore } from 'redux';
import { rootReducer } from './services/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
