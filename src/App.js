import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import { Catagories } from './loader/Catagories';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        {
          path: 'topics',
          element: <Topics></Topics>,
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        { path: 'statistic', element: <Statistic></Statistic> },
        { path: 'blog', element: <Blog></Blog> },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
