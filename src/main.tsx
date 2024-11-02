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
import { FEED_CLOSE, FEED_CONNECT, FEED_CONNECT_ERROR, FEED_DISCONNECT, FEED_MESSAGE } from './services/feed/actions';
import {
  PROFILE_ORDERS_CLOSE,
  PROFILE_ORDERS_CONNECT,
  PROFILE_ORDERS_CONNECT_ERROR,
  PROFILE_ORDERS_DISCONNECT,
  PROFILE_ORDERS_MESSAGE
} from './services/profile-orders/actions';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      thunk,
      webSocketMiddleware({
        connect: FEED_CONNECT,
        onError: FEED_CONNECT_ERROR,
        onMessage: FEED_MESSAGE,
        onClose: FEED_CLOSE,
        disconnect: FEED_DISCONNECT
      }),
      webSocketMiddleware({
        connect: PROFILE_ORDERS_CONNECT,
        onError: PROFILE_ORDERS_CONNECT_ERROR,
        onMessage: PROFILE_ORDERS_MESSAGE,
        onClose: PROFILE_ORDERS_CLOSE,
        disconnect: PROFILE_ORDERS_DISCONNECT
      })
    )
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
