import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './frontend/pages/home';
import About from './frontend/pages/about';
import Error from './frontend/pages/error';
import Layout from './frontend/pages/layout';
import Contact from './frontend/pages/contact';
import Browse from './frontend/pages/browse';
import MovieDetails from './frontend/components/movieDetails';
import "./App.css"
import { Provider } from 'react-redux';
import store from './frontend/redux/store/store';
import Login from './frontend/pages/login';
import Register from './frontend/pages/register';
import { ThemeProvider } from '@mui/material';
import theme from './frontend/theme';
import Bookmarks from './frontend/pages/bookmarks';


function App() {
  const routes = createBrowserRouter([
    {
      path: "", 
      element: <Layout />, 
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/browse", element: <Browse /> },
        { path: "/movie/:id", element: <MovieDetails /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Register /> },
        { path: "/bookmarks", element: <Bookmarks /> },
        { path: "*", element: <Error /> }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <section className="containerr">
            <div className="gradient-container">
              <div className="gradient g-1"></div>
              <div className="gradient g-2"></div>
            </div> 
          </section>
          <RouterProvider router={routes} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
