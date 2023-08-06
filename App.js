
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
function App() {
 const router=createBrowserRouter([
  {path:"/",element:<Navbar />,children:[
    {path:"/home",element:<Home />},
  {path:"/about",element:<About />},
  {path:"/items",element:<Items />}
  ]}
  
 ])

  return <>
  
  <RouterProvider router={router} />
  </>;
}

export default App;
