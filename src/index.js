import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { App } from './App';
import GlobalStyle from 'stylesConfig/GlobalStyle';
import { theme } from './stylesConfig/theme';
import { store, persistedStore } from 'store';
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
