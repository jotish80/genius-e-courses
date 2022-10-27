
import { FaFlagCheckered } from 'react-icons/fa';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import CheekOut from './components/CheekOut/CheekOut';
import Courses from './components/Courses/Courses';
import Faq from './components/FAQ/Faq';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        { path: '/header', element: <Header /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <LogIn /> },
        { path: '/courses', element: <Courses /> },
        { path: '/cheekout/:id', element: <PrivateRoute><CheekOut /></PrivateRoute> },
        { path: '/blog', element: <Blog /> },
        { path: '/faq', element: <Faq /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
