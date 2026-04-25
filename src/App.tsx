import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { DetailsPage } from "./pages/DetailsPage";
import { searchLoader } from "./pages/searchLoader";
import { detailsLoader } from "./pages/detailsLoader";
import { homePageLoader } from "./pages/homePageLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
        loader: homePageLoader
      },
      {
        path: '/search',
        element: <SearchPage/>,
        loader: searchLoader
      },
      {
        path: '/packages/:name',
        element: <DetailsPage/>,
        loader: detailsLoader
      }
    ]
  }
])

function App(){
  return <RouterProvider router={router}/>
} 

export default App;