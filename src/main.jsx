import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <FavoritesProvider>
                <App />
            </FavoritesProvider>
        </Provider>
    </BrowserRouter>
);
