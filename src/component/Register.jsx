export const Register = () => {
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
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Create Account
        </h1>

        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4">

            <form className="space-y-4">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a href="/login" className="text-primary-600 hover:underline">
                  Login
                </a>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}