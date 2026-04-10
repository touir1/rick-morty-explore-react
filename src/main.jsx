import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </BrowserRouter>
);
