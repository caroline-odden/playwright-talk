import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <button
        className="reset"
        onClick={async () => {
          await fetch("//localhost:3000/reset");
          window.location.reload();
        }}
      >
        Reset
      </button>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
