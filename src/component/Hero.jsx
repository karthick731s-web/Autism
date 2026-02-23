import React from 'react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative background elements - soft, abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Text content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
           

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-gray-800">Welcome to</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-2">
                Aura Community
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              A calm, supportive space designed for autistic individuals, 
              their families, and allies. Find resources, connect with others, 
              and thrive in your own way.
            </p>

            {/* Key features - simple, visual stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">10k+</div>
                </div>
                <span className="text-sm text-gray-600">Community members</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">24/7 Support available</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">Verified resources</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Join Community Free
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 text-lg font-medium rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
                Explore Resources
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 flex flex-wrap items-center gap-6 justify-center lg:justify-start opacity-70">
              <span className="text-sm text-gray-500">Trusted by:</span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 font-semibold">Autism Society</span>
                <span className="text-gray-400 font-semibold">NHS</span>
                <span className="text-gray-400 font-semibold">CDC</span>
              </div>
            </div>
          </div>

          {/* Right column - Illustration/Image */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
              
              {/* Main illustration - abstract, calming visual */}
              <div className="space-y-6">
                {/* Visual representation of community */}
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        i % 2 === 0 ? 'from-purple-400 to-purple-500' : 'from-blue-400 to-blue-500'
                      } transform hover:scale-110 transition-transform duration-300 opacity-${
                        90 - i * 10
                      }`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl">
                        {i % 2 === 0 ? '🌿' : '✨'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calming waves/patterns */}
                <div className="flex justify-center space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-8 bg-gradient-to-t from-purple-300 to-blue-300 rounded-full animate-pulse"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        height: `${Math.sin(i) * 20 + 30}px`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Quote or message */}
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <p className="text-gray-600 italic">
                    "Finally, a space where I can be myself without masking."
                  </p>
                  <p className="text-sm text-purple-600 mt-2">— Aura Community Member</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 left-10 w-12 h-12 bg-yellow-200 rounded-full opacity-30 animate-float"></div>
              <div className="absolute -top-6 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animate-float {
          animation: float 6s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

