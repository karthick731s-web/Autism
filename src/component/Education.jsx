import React, { useState } from 'react';

export const Education = () => {
  const [activeTab, setActiveTab] = useState('modules');
  const [selectedModule, setSelectedModule] = useState(null);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [questionCategory, setQuestionCategory] = useState('social');
  const [questions, setQuestions] = useState([
    { id: 1, category: 'social', question: 'How do I know when someone is joking?', answer: null, status: 'pending' },
    { id: 2, category: 'stress', question: 'What can I do when I feel overwhelmed in a crowd?', answer: 'Try finding a quiet corner, use noise-cancelling headphones, or take deep breaths.', status: 'answered' },
    { id: 3, category: 'social', question: 'How do I start a conversation with someone new?', answer: null, status: 'pending' }
  ]);

  // Learning Modules Data
  const learningModules = [
    {
      id: 1,
      title: 'Understanding Emotions',
      description: 'Learn to identify and express different emotions in daily life.',
      icon: '😊',
      progress: 75,
      lessons: 8,
      completed: 6,
      color: 'from-purple-400 to-purple-500',
      topics: ['Happy', 'Sad', 'Angry', 'Calm', 'Anxious', 'Excited']
    },
    {
      id: 2,
      title: 'Social Cues',
      description: 'Recognize body language, tone of voice, and social signals.',
      icon: '👥',
      progress: 45,
      lessons: 10,
      completed: 4.5,
      color: 'from-blue-400 to-blue-500',
      topics: ['Facial expressions', 'Tone of voice', 'Personal space', 'Turn-taking']
    },
    {
      id: 3,
      title: 'Daily Routines',
      description: 'Build structure and predictability in your day.',
      icon: '📅',
      progress: 90,
      lessons: 6,
      completed: 5.4,
      color: 'from-green-400 to-green-500',
      topics: ['Morning routine', 'School/Work', 'Meal times', 'Bedtime']
    },
    {
      id: 4,
      title: 'Sensory Awareness',
      description: 'Understand your sensory needs and preferences.',
      icon: '🌈',
      progress: 30,
      lessons: 12,
      completed: 3.6,
      color: 'from-orange-400 to-orange-500',
      topics: ['Sound sensitivity', 'Touch preferences', 'Visual input', 'Movement needs']
    }
  ];

  // Games Data
  const games = [
    {
      id: 1,
      title: 'Emotion Match',
      description: 'Match facial expressions with emotions',
      icon: '🎭',
      difficulty: 'Easy',
      color: 'from-purple-400 to-purple-500',
      category: 'puzzle'
    },
    {
      id: 2,
      title: 'Social Scenarios',
      description: 'Choose the best response in social situations',
      icon: '💭',
      difficulty: 'Medium',
      color: 'from-blue-400 to-blue-500',
      category: 'quiz'
    },
    {
      id: 3,
      title: 'Memory Pairs',
      description: 'Find matching pairs of emotions and situations',
      icon: '🧩',
      difficulty: 'Easy',
      color: 'from-green-400 to-green-500',
      category: 'puzzle'
    },
    {
      id: 4,
      title: 'Sensory Quest',
      description: 'Help characters find calm in different environments',
      icon: '🎮',
      difficulty: 'Hard',
      color: 'from-orange-400 to-orange-500',
      category: 'adventure'
    },
    {
      id: 5,
      title: 'Conversation Builder',
      description: 'Practice starting and maintaining conversations',
      icon: '💬',
      difficulty: 'Medium',
      color: 'from-pink-400 to-pink-500',
      category: 'interactive'
    },
    {
      id: 6,
      title: 'Calming Puzzle',
      description: 'Relaxing puzzles with soothing sounds',
      icon: '🧘',
      difficulty: 'Easy',
      color: 'from-indigo-400 to-indigo-500',
      category: 'puzzle'
    }
  ];

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: questions.length + 1,
      category: questionCategory,
      question: questionText,
      answer: null,
      status: 'pending'
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setShowQuestionForm(false);
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  const closeModuleDetail = () => {
    setSelectedModule(null);
  };

  const getCategoryIcon = (category) => {
    return category === 'social' ? '👥' : '🧘';
  };

  return (
    <section  id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Learn & Grow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Center
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn at your own pace with visual modules, ask questions about social situations, 
            and build skills through fun games.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl shadow-md border border-gray-100 inline-flex">
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'modules'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              📚 Learning Modules
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'stories'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              📖 Social Stories
            </button>
            <button
              onClick={() => setActiveTab('games')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'games'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              🎮 Strength Games
            </button>
          </div>
        </div>

        {/* Learning Modules Tab */}
        {activeTab === 'modules' && (
          <div>
            {selectedModule ? (
              // Module Detail View
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className={`bg-gradient-to-r ${selectedModule.color} px-8 py-6 flex justify-between items-center`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{selectedModule.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{selectedModule.title}</h3>
                  </div>
                  <button
                    onClick={closeModuleDetail}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{selectedModule.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Overall Progress</span>
                      <span className="font-semibold">{selectedModule.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${selectedModule.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {selectedModule.completed} of {selectedModule.lessons} lessons completed
                    </p>
                  </div>

                  <h4 className="font-semibold text-gray-700 mb-3">Topics covered:</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedModule.topics.map((topic, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors shadow-md">
                    Continue Learning
                  </button>
                </div>
              </div>
            ) : (
              // Module Grid View
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningModules.map((module) => (
                  <div
                    key={module.id}
                    onClick={() => handleModuleClick(module)}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                        {module.icon}
                      </div>
                      <span className="text-sm font-medium text-purple-600">{module.lessons} lessons</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{module.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-700">{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Social Stories Tab */}
        {activeTab === 'stories' && (
          <div className="space-y-6">
            {/* Ask Question Button */}
            {!showQuestionForm ? (
              <button
                onClick={() => setShowQuestionForm(true)}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
              >
                <span className="text-xl">❓</span>
                <span>Ask about social situations or stress</span>
              </button>
            ) : (
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ask your question</h3>
                <form onSubmit={handleSubmitQuestion}>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">Category</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="social"
                          checked={questionCategory === 'social'}
                          onChange={(e) => setQuestionCategory(e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-700">Social Interaction</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="stress"
                          checked={questionCategory === 'stress'}
                          onChange={(e) => setQuestionCategory(e.target.value)}
                          className="text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Handling Stress</span>
                      </label>
                    </div>
                  </div>
                  <textarea
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Type your question here..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 mb-4"
                    rows="3"
                    required
                  ></textarea>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowQuestionForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600"
                    >
                      Submit Question
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Community Questions</h3>
              {questions.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-2">{item.question}</p>
                      {item.answer ? (
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-green-600">Answer: </span>
                            {item.answer}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                            Awaiting response
                          </span>
                          <button className="text-xs text-purple-600 hover:text-purple-700">
                            Notify when answered
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resource Links */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h4 className="font-semibold text-gray-800 mb-3">Quick stress relief tips:</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="text-left p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                  <span className="text-2xl block mb-1">🌬️</span>
                  <span className="text-xs">Deep breathing</span>
                </button>
                <button className="text-left p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                  <span className="text-2xl block mb-1">🧩</span>
                  <span className="text-xs">Quiet activity</span>
                </button>
                <button className="text-left p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                  <span className="text-2xl block mb-1">🎧</span>
                  <span className="text-xs">Calming sounds</span>
                </button>
                <button className="text-left p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                  <span className="text-2xl block mb-1">🤗</span>
                  <span className="text-xs">Self-hug</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Games Tab */}
        {activeTab === 'games' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                    {game.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{game.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{game.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {game.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{game.category}</span>
                  </div>

                  <button className="w-full py-2 border-2 border-purple-200 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors">
                    Play Now
                  </button>
                </div>
              ))}
            </div>

            {/* Achievement Section */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                Your Achievements
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl opacity-30">
                    🎮
                  </div>
                  <p className="text-xs text-gray-500 mt-2">5 games played</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <p className="text-xs text-gray-600 mt-2">3 achievements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl opacity-30">
                    🔥
                  </div>
                  <p className="text-xs text-gray-500 mt-2">2 day streak</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};