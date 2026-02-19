import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './i18n/config'; // Import i18n
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { ErrorBoundary } from './components/ErrorBoundary';

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ErrorBoundary>
    </StrictMode>,
  );
}).catch((error) => {
  console.error('Failed to start mock worker', error);
  // Render the app anyway to avoid blocking development
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ErrorBoundary>
    </StrictMode>,
  );
});
