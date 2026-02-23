import React, { useState } from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', color: 'hover:bg-[#1877f2]' },
    { icon: 'fab fa-twitter', href: '#', color: 'hover:bg-[#1da1f2]' },
    { icon: 'fab fa-instagram', href: '#', color: 'hover:bg-[#e4405f]' },
    { icon: 'fab fa-linkedin-in', href: '#', color: 'hover:bg-[#0a66c2]' }
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Simple gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main footer content - centered, minimal design */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Logo and brand - centered */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-light">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Aura
            </span>
          </div>
          
          {/* Tagline - centered */}
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Creating calm, supportive spaces for autistic individuals to thrive authentically.
          </p>

          {/* Compact newsletter form - centered */}
          <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-gray-50"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                required
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 shadow-sm whitespace-nowrap min-w-[90px]"
              >
                {newsletterStatus === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </span>
                ) : newsletterStatus === 'success' ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Done!
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              No spam. Only calm resources and updates.
            </p>
          </div>

          {/* Social links - minimal */}
          <div className="flex items-center justify-center space-x-3 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-md`}
                aria-label={`Follow us on ${social.icon.split('-')[1]}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Copyright - minimal */}
          <div className="pt-4 text-xs text-gray-400 border-t border-gray-100 w-full">
            <p>© {currentYear} Aura. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center">
              Made with 
              <svg className="w-3 h-3 mx-1 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              for the autism community
            </p>
          </div>
        </div>

        {/* Emergency support - compact banner */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="bg-amber-50 rounded-lg p-3 text-center">
            <p className="text-xs text-amber-700">
              <span className="font-medium">Need immediate support?</span>
              <br />
              <a href="tel:988" className="font-bold hover:underline mx-1">988</a> 
              (Crisis Lifeline) or 
              <a href="tel:911" className="font-bold hover:underline mx-1">911</a>
            </p>
          </div>
        </div>
      </div>

      {/* Floating back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};