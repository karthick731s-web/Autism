import React, { useState, useEffect } from 'react';

export const StrengthRadar = () => {
  const [activeTab, setActiveTab] = useState('radar');
  const [streak, setStreak] = useState(7);
  const [points, setPoints] = useState(1250);
  const [dailyProgress, setDailyProgress] = useState(65);
  const [showReward, setShowReward] = useState(false);
  const [selectedStrength, setSelectedStrength] = useState(null);

  // Strength data for radar chart
  const strengths = [
    { name: 'Focus', value: 85, icon: '🎯', color: 'from-purple-400 to-purple-600', description: 'Ability to concentrate and stay on task' },
    { name: 'Creativity', value: 92, icon: '🎨', color: 'from-blue-400 to-blue-600', description: 'Thinking outside the box, imagination' },
    { name: 'Pattern Recognition', value: 78, icon: '🧩', color: 'from-green-400 to-green-600', description: 'Seeing connections and patterns' },
    { name: 'Kindness', value: 95, icon: '💝', color: 'from-pink-400 to-pink-600', description: 'Caring for others, empathy' },
    { name: 'Bravery', value: 70, icon: '🦁', color: 'from-orange-400 to-orange-600', description: 'Facing challenges with courage' },
    { name: 'Memory', value: 88, icon: '🧠', color: 'from-indigo-400 to-indigo-600', description: 'Remembering details and information' }
  ];

  // Daily activities for streak
  const dailyActivities = [
    { id: 1, name: 'Morning routine', completed: true, points: 10, icon: '🌅' },
    { id: 2, name: 'Emotion check-in', completed: true, points: 15, icon: '😊' },
    { id: 3, name: 'Learning module', completed: true, points: 20, icon: '📚' },
    { id: 4, name: 'Kindness act', completed: false, points: 15, icon: '💝' },
    { id: 5, name: 'Sensory break', completed: true, points: 10, icon: '🧘' },
    { id: 6, name: 'Communication practice', completed: false, points: 20, icon: '💬' },
    { id: 7, name: 'Evening reflection', completed: true, points: 10, icon: '🌙' }
  ];

  // Achievements
  const achievements = [
    { id: 1, name: '7-Day Streak', icon: '🔥', achieved: true, points: 100, date: '2 days ago' },
    { id: 2, name: 'Focus Master', icon: '🎯', achieved: true, points: 150, date: '5 days ago' },
    { id: 3, name: 'Kindness Champion', icon: '💝', achieved: false, points: 200, progress: 60 },
    { id: 4, name: 'Pattern Detective', icon: '🔍', achieved: true, points: 125, date: '1 week ago' },
    { id: 5, name: 'Brave Heart', icon: '🦁', achieved: false, points: 175, progress: 30 },
    { id: 6, name: 'Creative Mind', icon: '🎨', achieved: true, points: 100, date: '3 days ago' }
  ];

  // Radar chart coordinates
  const getRadarCoordinates = () => {
    const center = 150;
    const radius = 100;
    const angleStep = (Math.PI * 2) / strengths.length;
    
    return strengths.map((strength, index) => {
      const angle = index * angleStep - Math.PI / 2; // Start from top
      const valueRadius = (strength.value / 100) * radius;
      return {
        x: center + valueRadius * Math.cos(angle),
        y: center + valueRadius * Math.sin(angle)
      };
    });
  };

  const radarPoints = getRadarCoordinates();
  const polygonPoints = radarPoints.map(p => `${p.x},${p.y}`).join(' ');

  // Handle daily task completion
  const completeTask = (taskId) => {
    // In real app, update backend
    setPoints(prev => prev + 15);
    setDailyProgress(prev => Math.min(prev + 10, 100));
    
    // Show reward animation
    setShowReward(true);
    setTimeout(() => setShowReward(false), 2000);
  };

  return (
    <section  id="strength">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with streak and points */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              Your Strengths
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Strength{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Radar
              </span>
            </h2>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Streak card */}
            <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🔥</span>
                <div>
                  <p className="text-xs opacity-90">Current streak</p>
                  <p className="text-2xl font-bold">{streak} days</p>
                </div>
              </div>
            </div>
            
            {/* Points card */}
            <div className="bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">⭐</span>
                <div>
                  <p className="text-xs opacity-90">Total points</p>
                  <p className="text-2xl font-bold">{points}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-md border border-gray-100 inline-flex">
            <button
              onClick={() => setActiveTab('radar')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'radar'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              📊 Strength Radar
            </button>
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'daily'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              📅 Daily Streak
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'achievements'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              🏆 Achievements
            </button>
          </div>
        </div>

        {/* Reward animation */}
        {showReward && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-2xl shadow-2xl text-center">
              <span className="text-4xl block mb-2">✨</span>
              <p className="text-xl font-bold">+15 points!</p>
            </div>
          </div>
        )}

        {/* Radar Tab */}
        {activeTab === 'radar' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Radar Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Strength Profile</h3>
              
              <div className="relative w-full max-w-md mx-auto">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Background circles */}
                  {[0.2, 0.4, 0.6, 0.8, 1].map((level, i) => (
                    <circle
                      key={i}
                      cx="150"
                      cy="150"
                      r={level * 100}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))}
                  
                  {/* Axis lines */}
                  {strengths.map((_, i) => {
                    const angle = i * (Math.PI * 2) / strengths.length - Math.PI / 2;
                    const x = 150 + 100 * Math.cos(angle);
                    const y = 150 + 100 * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        x1="150"
                        y1="150"
                        x2={x}
                        y2={y}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    );
                  })}
                  
                  {/* Strength polygon */}
                  <polygon
                    points={polygonPoints}
                    fill="url(#gradient)"
                    fillOpacity="0.3"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Strength points */}
                  {radarPoints.map((point, i) => (
                    <g key={i}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        className="cursor-pointer hover:r-8 transition-all"
                        fill="white"
                        stroke={`url(#gradient)`}
                        strokeWidth="2"
                        onClick={() => setSelectedStrength(strengths[i])}
                      />
                      <text
                        x={point.x + 15}
                        y={point.y - 10}
                        className="text-xs fill-gray-600 font-medium"
                      >
                        {strengths[i].name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {strengths.map((strength, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="text-2xl">{strength.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{strength.name}</span>
                        <span className="text-purple-600">{strength.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`bg-gradient-to-r ${strength.color} h-1.5 rounded-full`}
                          style={{ width: `${strength.value}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strength Details */}
            <div className="space-y-4">
              {selectedStrength ? (
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl">{selectedStrength.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{selectedStrength.name}</h4>
                      <p className="text-sm text-gray-500">Current level: {selectedStrength.value}%</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{selectedStrength.description}</p>
                  
                  <h5 className="font-semibold text-gray-700 mb-2">Recent achievements:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Completed 5 focus sessions this week</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Earned 150 points from activities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-500">⚡</span>
                      <span>3-day streak in this strength</span>
                    </li>
                  </ul>

                  <button className="w-full mt-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors">
                    View all activities
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
                  <span className="text-5xl mb-4 inline-block">👆</span>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Click on any strength</h4>
                  <p className="text-gray-500 text-sm">
                    Click on the points in the radar chart to see detailed information about each strength.
                  </p>
                </div>
              )}

              {/* Quick tips */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">💡</span>
                  Tips to grow your strengths
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span>Practice focus with 5-minute breathing exercises</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span>Try a new creative activity each week</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span>Do one kind thing for someone daily</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Daily Streak Tab */}
        {activeTab === 'daily' && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Daily Progress Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Progress</h3>
                
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - dailyProgress / 100)}`}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">{dailyProgress}%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center space-x-2">
                    <span className="text-3xl">🔥</span>
                    <span className="text-xl font-bold text-gray-800">{streak} day streak</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Activities completed</span>
                    <span className="font-semibold">
                      {dailyActivities.filter(a => a.completed).length}/{dailyActivities.length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Points earned today</span>
                    <span className="font-semibold text-purple-600">
                      {dailyActivities.filter(a => a.completed).reduce((sum, a) => sum + a.points, 0)} pts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Tasks */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Activities</h3>
                
                <div className="space-y-3">
                  {dailyActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className={`flex items-center justify-between p-3 rounded-xl border ${
                        activity.completed
                          ? 'bg-green-50 border-green-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{activity.icon}</span>
                        <div>
                          <p className="font-medium text-gray-700">{activity.name}</p>
                          <p className="text-xs text-gray-500">{activity.points} points</p>
                        </div>
                      </div>
                      
                      {activity.completed ? (
                        <span className="text-green-600 font-medium text-sm flex items-center">
                          ✓ Completed
                        </span>
                      ) : (
                        <button
                          onClick={() => completeTask(activity.id)}
                          className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Streak rewards */}
                <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-xl mr-2">🎁</span>
                    Streak rewards
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className={`p-2 rounded-lg ${streak >= 3 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <span className="text-2xl block">🔥</span>
                      <span className="text-xs">3 days</span>
                      {streak >= 3 && <span className="text-green-600 text-xs block">✓ +50 pts</span>}
                    </div>
                    <div className={`p-2 rounded-lg ${streak >= 7 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <span className="text-2xl block">⭐</span>
                      <span className="text-xs">7 days</span>
                      {streak >= 7 && <span className="text-green-600 text-xs block">✓ +150 pts</span>}
                    </div>
                    <div className={`p-2 rounded-lg ${streak >= 30 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <span className="text-2xl block">🏆</span>
                      <span className="text-xs">30 days</span>
                      {streak >= 30 && <span className="text-green-600 text-xs block">✓ +500 pts</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`bg-white rounded-xl p-6 shadow-md border ${
                  achievement.achieved ? 'border-green-200' : 'border-gray-200'
                } hover:shadow-xl transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  {achievement.achieved ? (
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                      Unlocked
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      In progress
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-1">{achievement.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{achievement.points} points</p>

                {achievement.achieved ? (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Earned {achievement.date}</span>
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Special bonus card */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white shadow-xl md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2">Weekly Bonus Challenge</h4>
                  <p className="text-purple-100 text-sm mb-4">
                    Complete all daily activities for 7 days to earn 500 bonus points!
                  </p>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5,6,7].map((day) => (
                      <div
                        key={day}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                          day <= streak
                            ? 'bg-white text-purple-600 font-bold'
                            : 'bg-white/20 text-white'
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-6xl opacity-50">✨</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};