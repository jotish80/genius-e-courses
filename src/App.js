 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Faq from './components/FAQ/Faq';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
   {
    path: '/', element: <Main />,
    children: [
   {path:'/home', element: <Home />},
   {path:'/register', element: <Register />},
   {path:'/login', element: <LogIn />},
   {path:'/courses', element: <Courses />},
   {path:'/courses/:id', element: <Courses />},
   {path:'/blog', element: <Blog />},
   {path:'/faq', element: <Faq />},
   {path:'*', element: <NotFound />},
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
