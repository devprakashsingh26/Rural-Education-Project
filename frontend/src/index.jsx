 import React from 'react'
 import { createRoot } from 'react-dom/client'
 import App from './App'
 if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register(new URL('./service-worker.js', import.meta.url))
  .catch(console.error);


 }
 createRoot(document.getElementById('root')).render(<App />)
