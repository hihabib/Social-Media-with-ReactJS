import Signin from './pages/Signin/Signin.jsx'
import MainFeed from  './pages/MainFeed/MainFeed.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/newsfeed",
    element: <MainFeed/>,
  },
]);


export default router;
