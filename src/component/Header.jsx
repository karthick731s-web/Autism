import React from 'react';

export const Header = () => {

  const navLinks = [
    { name: "Home" },
    { name: "Features" },
    { name: "Assessment" },
    { name: "About" }
  ]

  return (
    <header className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl shadow-sm">
              <img
                        className="w-8 h-8"
                        src="https://ik.imagekit.io/zqdmtrlsv/New%20Folder/WhatsApp%20Image%202026-02-23%20at%2010.22.01%20PM.jpeg"
                        alt="logo"
                    />
            </div>

            <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Aura
            </span>
          </div>

          {/* Navbar Options (Display Only) */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => alert(link.name + " page coming soon")}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition relative group"
              >
                {link.name}

                {/* underline animation */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </button>
            ))}

          </div>

        </div>
      </nav>

     

    </header>
  );
};

export default Header;