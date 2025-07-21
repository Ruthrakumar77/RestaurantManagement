import { useState } from "react"
import { useNavigate } from "react-router-dom";

// demo userInfo
const user = { email: "ruthra@gmail.com", password: "Ruthra@1" }
function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const handelChange = (event) => {
        const value = event.target.value
        const id = event.target.id
        setLoginData({ ...loginData, [id]: value })
    };
    const handelSubmit = (event) => {
        event.preventDefault()
        // logic to request the login data to server
        if (loginData.email == user.email && loginData.password === user.password) {
            // store a id in localStorage
            localStorage.setItem("id", "user1234")
            // navigate to home page (dashboard)
            navigate("/")
        } else {
            alert("admin details are incorrect")
        }

    }
    return (
        <div className="login bg-slate-300 flex h-screen items-center">
            <div className="w-1/2 text-center">
                {/* left */}
                <h1 className="text-7xl text-green-700 font-bold">MY HOTEL</h1>
            </div>
            <div className="w-1/2">
                {/* right*/}
                <form onSubmit={handelSubmit} class="max-w-sm mx-auto p-8 bg-slate-100 opacity-95 rounded-lg">
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>(ruthra@gmail.com)

                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={handelChange} />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>(Ruthra@1)
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handelChange} />
                    </div>
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>

            </div>
        </div>
    )
}
export default Login