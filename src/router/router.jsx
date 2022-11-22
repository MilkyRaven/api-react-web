import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import View from "../Layout/View"
import Games from "../pages/Games"
import Types from "../pages/Types"
import About from "../pages/About"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <View />,
        children: [
        {
            index: true,
            element: <App />
        },
        {
            path: "Games",
            element: <Games />
        },
        {
            path: "Types",
            element: <Types />
        },
        {
            path: "About",
            element: <About />
        }
    ]
    },
  ])