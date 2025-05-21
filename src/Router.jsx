import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import EmployeeList from "./pages/EmployeeList"
import Revenue from "./pages/Revenue"
import VegItemsList from "./pages/VegItemsList"
import NonVegItems from "./pages/NonVegItems"
import EmployeeDetails from "./components/EmployeeDetails"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "employeelist",
                element: <EmployeeList />
            },
            {
                path: "revenue",
                element: <Revenue />
            },
            {
                path: "vegmenu",
                element: <VegItemsList />
            },
            {
                path: "nonvegmenu",
                element: <NonVegItems />
            },
            {
                path: "employee/:id",//dynamic page
                element: <EmployeeDetails />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router