import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './services';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { webSocketMiddleware } from './services/middleware';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk, webSocketMiddleware())));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
