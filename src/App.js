import './App.css';
import Header from "./Layout/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "./Layout/RootPage";
import HomePage from "./Pages/HomePage";
import Blogs from "./Pages/Blogs";
import WorksPage from "./Pages/WorksPage";

function App() {

    const router = createBrowserRouter(
        [
            {
                path:'/',
                element:<RootPage/>,
                errorElement:<h1>Page not found</h1>,
                children:[
                    {
                        path:'/',
                        element:<HomePage/>,
                        errorElement:<h1>Home page not found</h1>
                    },
                    {
                        path:'/blogs',
                        element:<Blogs/>,
                        errorElement:<h1>Blogs page not found</h1>
                    },
                    {
                        path: '/works',
                        element:<WorksPage/>,
                        errorElement: <h1>works page not found</h1>
                    },
                    {
                        path: '/contact',
                        element: <h1>contact page</h1>,
                        errorElement: <h1>contact page not found</h1>
                    },
                ]
            }
        ]
    )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
