import { createBrowserRouter } from "react-router-dom";

import Register from "../page/public/Register";
import RecoverPassword from "../page/public/RecoverPassword";
import ChangePassword from "../page/public/ChangePassword";
import NotFound from "../page/public/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Login from "../components/login/Login"

export const router = createBrowserRouter([

    {
        path:'/',
        element: <LayoutPublic/>,
        errorElement:<NotFound/>,
        children:[
                {
                    index: true,
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/recover-password',
                    element:<RecoverPassword/>
                },
                 {
                    path:'/change-password',
                    element:<ChangePassword/>
                }
            
        ]
    }




]);
