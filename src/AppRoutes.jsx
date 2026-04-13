import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import CharacterListPage from './pages/CharacterListPage'
import CharacterDetailPage from './pages/CharacterDetailPage'
import DemoReducerPage from './pages/DemoReducerPage'
import TodoListPage from './pages/TodoListPage'

function AppRoutes() {
  const appRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/characters', element: <CharacterListPage /> },
    { path: '/character/:id', element: <CharacterDetailPage /> },
    { path: '/demo-reducer', element: <DemoReducerPage /> },
    { path: '/todo-list', element: <TodoListPage /> }

  ];

  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default AppRoutes;