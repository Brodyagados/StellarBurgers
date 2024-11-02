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
