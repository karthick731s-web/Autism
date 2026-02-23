import { Link, useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    return (
        <section className="bg-gray-50 min-h-screen dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="flex items-center gap-2 mb-4">
                    <img
                        className="w-8 h-8"
                        src="https://ik.imagekit.io/zqdmtrlsv/New%20Folder/WhatsApp%20Image%202026-02-23%20at%2010.22.01%20PM.jpeg"
                        alt="logo"
                    />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        AURA
                    </span>
                </div>

                <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 sm:p-8">

                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>

                        {/* FORM */}
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault()
                                navigate("/home")
                            }}
                        >

                            {/* EMAIL */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    required
                                />
                            </div>

                            {/* REMEMBER */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-gray-500 dark:text-gray-300">
                                    <input type="checkbox" className="w-4 h-4" />
                                    Remember me
                                </label>

                                <span className="text-primary-600 cursor-pointer">
                                    Forgot password?
                                </span>
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 rounded-lg px-5 py-2.5"
                            >
                                Sign in
                            </button>

                            {/* SIGNUP LINK */}
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    to="/register"
                                    className="font-medium text-primary-600 hover:underline"
                                >
                                    Sign up
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}