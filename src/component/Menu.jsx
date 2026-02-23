import React from 'react';

export const Menu = () => {
  const cards = [
    {
      id: 1,
      title: 'Education',
      description: 'Learn at your own pace with visual schedules, social stories, and interactive lessons designed for neurodiverse learners.',
      icon: '📚',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:bg-purple-100',
      features: ['Visual schedules', 'Social stories', 'Interactive quizzes']
    },
    {
      id: 2,
      title: 'Emotion Understanding',
      description: 'Recognize and express feelings with emotion cards, mood tracking, and guided exercises for emotional regulation.',
      icon: '😊',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:bg-blue-100',
      features: ['Emotion cards', 'Mood journal', 'Calming exercises']
    },
    {
      id: 3,
      title: 'Daily Progress Tracker',
      description: 'Build routines and celebrate achievements with customizable trackers, visual schedules, and positive reinforcement.',
      icon: '📊',
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:bg-green-100',
      features: ['Routine builder', 'Achievement stars', 'Visual schedules']
    },
    {
      id: 4,
      title: 'Communication Aids',
      description: 'Express yourself with picture cards, text-to-speech tools, and customizable communication boards.',
      icon: '💬',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:bg-orange-100',
      features: ['Picture cards', 'Text-to-speech', 'Communication board']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tools Designed for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our specialized tools created with neurodiversity in mind — 
            simple, visual, and customizable to your needs.
          </p>
        </div>

        {/* Menu cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border ${card.borderColor}`}
            >
              {/* Top color accent */}
              <div className={`h-2 w-full bg-gradient-to-r ${card.color}`}></div>
              
              <div className="p-6">
                {/* Icon with colored background */}
                <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{card.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Feature pills */}
                <div className="space-y-2 mb-6">
                  {card.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className={`w-4 h-4 mr-2 text-${card.color.split('-')[1]}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <button className={`w-full py-2 px-4 ${card.bgColor} ${card.hoverColor} text-gray-700 font-medium rounded-xl transition-colors duration-200 flex items-center justify-center group/btn`}>
                  <span>Explore {card.title}</span>
                  <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${card.color} opacity-5 rounded-bl-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Quick tips section - optional, adds extra value */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-purple-100 shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            How to use these tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <p className="text-sm text-gray-600">Start with one tool at your own pace</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <p className="text-sm text-gray-600">Customize settings to your preferences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <p className="text-sm text-gray-600">Use consistently to build routines</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <p className="text-sm text-gray-600">Share progress with caregivers if desired</p>
            </div>
          </div>
        </div>

        {/* Accessibility note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 inline-flex items-center">
            <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All tools are customizable — adjust text size, colors, and sound settings
          </p>
        </div>
      </div>
    </section>
  );
};

