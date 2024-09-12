import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './services';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
