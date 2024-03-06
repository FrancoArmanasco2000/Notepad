import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NotesProvider } from './context/notes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotesProvider>
    <App />
  </NotesProvider>,
)
