import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { AuthPage } from './AuthPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   { path: "blog", element: <Blog /> },
    //   { path: "blog/create", element: <CreateBlog /> },
    // ]
  },
  {path:'/register' ,element:<AuthPage/>}


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
