import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {store} from "./redux/Store.jsx"
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
          <App />
      </AppContextProvider>  
    </Provider>
  </StrictMode>,
)
