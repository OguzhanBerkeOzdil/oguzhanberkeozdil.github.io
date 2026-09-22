import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/dm-sans'
import '@fontsource/newsreader/400.css'
import '@fontsource/newsreader/500.css'
import '@fontsource/newsreader/400-italic.css'
import '@fontsource/ibm-plex-mono/400.css'
import App from './App'
import './styles.css'

hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
