import React, { useState, useEffect } from 'react';

export const SupportTools = () => {
  const [activeModal, setActiveModal] = useState(null); // 'loud', 'break', 'hungry', 'help', 'wordgame', 'diary'
  const [showWordGame, setShowWordGame] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState({ title: '', content: '', mood: '', tags: [] });
  const [selectedWords, setSelectedWords] = useState([]);
  const [sentence, setSentence] = useState('');
  const [wordGameScore, setWordGameScore] = useState(0);

  // Sample word bank for word connection game
  const wordBank = {
    easy: ['I', 'you', 'we', 'they', 'like', 'love', 'play', 'eat', 'sleep', 'happy', 'sad', 'big', 'small'],
    medium: ['because', 'together', 'outside', 'inside', 'today', 'tomorrow', 'yesterday', 'always', 'never'],
    animals: ['cat', 'dog', 'bird', 'fish', 'rabbit', 'turtle', 'butterfly', 'elephant'],
    actions: ['running', 'jumping', 'swimming', 'reading', 'drawing', 'singing', 'dancing'],
    feelings: ['excited', 'scared', 'calm', 'angry', 'surprised', 'proud', 'brave', 'kind']
  };

  // Combine all words for the game
  const allWords = [...wordBank.easy, ...wordBank.medium, ...wordBank.animals, ...wordBank.actions, ...wordBank.feelings];

  // Sample diary entries
  const sampleEntries = [
    { id: 1, date: '2024-02-23', title: 'My favorite dinosaur', content: 'I love learning about T-Rex. They are so big and powerful!', mood: '😊', tags: ['dinosaurs', 'learning'] },
    { id: 2, date: '2024-02-22', title: 'Drawing time', content: 'Today I drew a rainbow with my sister. It made me happy.', mood: '🎨', tags: ['art', 'family'] },
    { id: 3, date: '2024-02-21', title: 'Quiet time', content: 'I like reading books about space. The stars are beautiful.', mood: '🌙', tags: ['reading', 'space'] }
  ];

  // Quick coping strategies
  const copingStrategies = {
    loud: [
      { icon: '🎧', text: 'Use noise-canceling headphones' },
      { icon: '🚪', text: 'Find a quiet space' },
      { icon: '👐', text: 'Cover ears gently' },
      { icon: '🌿', text: 'Take 5 deep breaths' }
    ],
    break: [
      { icon: '🧘', text: 'Quiet corner time' },
      { icon: '🧩', text: 'Do a puzzle' },
      { icon: '📚', text: 'Read a book' },
      { icon: '🎨', text: 'Draw something' }
    ],
    hungry: [
      { icon: '🍎', text: 'Ask for a snack' },
      { icon: '💧', text: 'Drink water' },
      { icon: '🍪', text: 'Have a healthy treat' },
      { icon: '🥗', text: 'Tell a grown-up' }
    ],
    help: [
      { icon: '👥', text: 'Find a trusted person' },
      { icon: '🆘', text: 'Use help card' },
      { icon: '💬', text: 'Type what you need' },
      { icon: '🤝', text: 'Wait with someone' }
    ]
  };

  // Initialize with sample entries
  useEffect(() => {
    setDiaryEntries(sampleEntries);
  }, []);

  // Handle word selection for sentence building
  const handleWordClick = (word) => {
    setSelectedWords([...selectedWords, word]);
    setSentence(prev => prev + (prev ? ' ' : '') + word);
  };

  const clearSentence = () => {
    setSelectedWords([]);
    setSentence('');
  };

  const checkSentence = () => {
    if (sentence.split(' ').length >= 3) {
      setWordGameScore(prev => prev + 10);
      alert('✨ Great sentence! +10 points');
      clearSentence();
    } else {
      alert('Try making a longer sentence with at least 3 words');
    }
  };

  // Save diary entry
  const saveDiaryEntry = () => {
    if (currentEntry.title && currentEntry.content) {
      const newEntry = {
        id: diaryEntries.length + 1,
        date: new Date().toISOString().split('T')[0],
        ...currentEntry,
        mood: currentEntry.mood || '😊'
      };
      setDiaryEntries([newEntry, ...diaryEntries]);
      setCurrentEntry({ title: '', content: '', mood: '', tags: [] });
      setShowDiary(false);
    }
  };

  return (
    <>
      <section  id="SupportTools">
{/* Main content area - can be empty or include other components */}
      <div className="min-h-[60vh] bg-gradient-to-b from-white to-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Support Tools
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Word Connection Game Card */}
            <div 
              onClick={() => setShowWordGame(true)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-purple-100 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  🔤
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Word Connection</h3>
                  <p className="text-sm text-gray-500">Build sentences with words</p>
                </div>
              </div>
              <p className="text-gray-600">Connect words to form sentences and express yourself.</p>
            </div>

            {/* Personal Diary Card */}
            <div 
              onClick={() => setShowDiary(true)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-purple-100 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📔
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">My Diary</h3>
                  <p className="text-sm text-gray-500">Share your passions and feelings</p>
                </div>
              </div>
              <p className="text-gray-600">Write about your hobbies, loves, and special interests.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Too Loud Button */}
            <button
              onClick={() => setActiveModal('loud')}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-3xl mb-1">🔊</span>
              <span className="text-sm font-medium">Too Loud</span>
            </button>

            {/* Need a Break Button */}
            <button
              onClick={() => setActiveModal('break')}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-3xl mb-1">😌</span>
              <span className="text-sm font-medium">Need a Break</span>
            </button>

            {/* I'm Hungry Button */}
            <button
              onClick={() => setActiveModal('hungry')}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-3xl mb-1">🍎</span>
              <span className="text-sm font-medium">I'm Hungry</span>
            </button>

            {/* Help Me Button */}
            <button
              onClick={() => setActiveModal('help')}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-3xl mb-1">🆘</span>
              <span className="text-sm font-medium">Help Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}

      {/* Too Loud Modal */}
      {activeModal === 'loud' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="text-2xl mr-2">🔊</span> Too Loud?
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-white/80 hover:text-white">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Here are some things that might help:</p>
              <div className="space-y-3">
                {copingStrategies.loud.map((strategy, index) => (
                  <button
                    key={index}
                    className="w-full p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-left flex items-center space-x-3"
                  >
                    <span className="text-2xl">{strategy.icon}</span>
                    <span className="text-gray-700">{strategy.text}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-full mt-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Need a Break Modal */}
      {activeModal === 'break' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="text-2xl mr-2">😌</span> Need a Break?
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-white/80 hover:text-white">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Take a moment for yourself:</p>
              <div className="space-y-3">
                {copingStrategies.break.map((strategy, index) => (
                  <button
                    key={index}
                    className="w-full p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors text-left flex items-center space-x-3"
                  >
                    <span className="text-2xl">{strategy.icon}</span>
                    <span className="text-gray-700">{strategy.text}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-xl">
                <p className="text-sm text-blue-800 font-medium">🕐 Break timer</p>
                <div className="flex justify-between mt-2">
                  {[5, 10, 15].map((mins) => (
                    <button key={mins} className="px-4 py-2 bg-white rounded-lg text-blue-600 text-sm hover:bg-blue-50">
                      {mins} min
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* I'm Hungry Modal */}
      {activeModal === 'hungry' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="text-2xl mr-2">🍎</span> I'm Hungry
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-white/80 hover:text-white">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Hunger helpers:</p>
              <div className="space-y-3">
                {copingStrategies.hungry.map((strategy, index) => (
                  <button
                    key={index}
                    className="w-full p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors text-left flex items-center space-x-3"
                  >
                    <span className="text-2xl">{strategy.icon}</span>
                    <span className="text-gray-700">{strategy.text}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="p-3 bg-green-100 rounded-lg text-green-700">🥪 Ask for snack</button>
                <button className="p-3 bg-blue-100 rounded-lg text-blue-700">💧 Get water</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Me Modal */}
      {activeModal === 'help' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="text-2xl mr-2">🆘</span> Need Help?
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-white/80 hover:text-white">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Getting support:</p>
              <div className="space-y-3">
                {copingStrategies.help.map((strategy, index) => (
                  <button
                    key={index}
                    className="w-full p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-left flex items-center space-x-3"
                  >
                    <span className="text-2xl">{strategy.icon}</span>
                    <span className="text-gray-700">{strategy.text}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Type what you need help with..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Word Connection Game Modal */}
      {showWordGame && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="text-2xl mr-2">🔤</span> Word Connection Game
              </h3>
              <button onClick={() => setShowWordGame(false)} className="text-white/80 hover:text-white">✕</button>
            </div>
            
            <div className="p-6">
              {/* Score */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Your score:</span>
                <span className="text-2xl font-bold text-purple-600">{wordGameScore}</span>
              </div>

              {/* Sentence building area */}
              <div className="bg-purple-50 p-4 rounded-xl mb-4 min-h-[100px]">
                <p className="text-gray-700 text-lg">{sentence || '✨ Click words to build a sentence...'}</p>
              </div>

              {/* Word bank */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Click words to connect:</h4>
                <div className="flex flex-wrap gap-2">
                  {allWords.map((word, index) => (
                    <button
                      key={index}
                      onClick={() => handleWordClick(word)}
                      className="px-4 py-2 bg-white border-2 border-purple-200 rounded-lg text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={clearSentence}
                  className="flex-1 py-2 border-2 border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Clear
                </button>
                <button
                  onClick={checkSentence}
                  className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600"
                >
                  Check Sentence
                </button>
              </div>

              {/* Sentence examples */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-2">Try making sentences like:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• "I love my cat"</p>
                  <p>• "We are playing outside today"</p>
                  <p>• "The big elephant is swimming"</p>
                  <p>• "I feel happy when drawing"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Personal Diary Modal */}
      {showDiary && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="text-2xl mr-2">📔</span> My Personal Diary
              </h3>
              <button onClick={() => setShowDiary(false)} className="text-white/80 hover:text-white">✕</button>
            </div>
            
            <div className="p-6">
              {/* New entry form */}
              <div className="bg-pink-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Write about your day:</h4>
                <input
                  type="text"
                  placeholder="Title (e.g., My favorite hobby)"
                  value={currentEntry.title}
                  onChange={(e) => setCurrentEntry({...currentEntry, title: e.target.value})}
                  className="w-full p-2 mb-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <textarea
                  placeholder="What do you love? What makes you happy? Share your passions..."
                  value={currentEntry.content}
                  onChange={(e) => setCurrentEntry({...currentEntry, content: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 mb-3"
                  rows="4"
                />
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-gray-600">How are you feeling?</span>
                  {['😊', '🎨', '🌙', '⚡', '🌟'].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setCurrentEntry({...currentEntry, mood})}
                      className={`text-2xl p-2 rounded-lg hover:bg-pink-200 ${
                        currentEntry.mood === mood ? 'bg-pink-200' : ''
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
                <button
                  onClick={saveDiaryEntry}
                  className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600"
                >
                  Save Entry
                </button>
              </div>

              {/* Previous entries */}
              <h4 className="font-semibold text-gray-700 mb-3">Your previous entries:</h4>
              <div className="space-y-3">
                {diaryEntries.map((entry) => (
                  <div key={entry.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-2xl mr-2">{entry.mood}</span>
                        <span className="font-semibold text-gray-800">{entry.title}</span>
                      </div>
                      <span className="text-xs text-gray-400">{entry.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{entry.content}</p>
                    <div className="flex gap-1">
                      {entry.tags?.map((tag, i) => (
                        <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add padding at bottom to prevent content from being hidden behind fixed buttons */}
      <div className="h-24"></div>
      </section>
    </>
  );
};