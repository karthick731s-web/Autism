import React, { useState, useRef, useEffect } from 'react';

export const Emotion= () => {
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [currentEmotion, setCurrentEmotion] = useState(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [feedback, setFeedback] = useState('');
  const [showSensationPopup, setShowSensationPopup] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [sensationDescription, setSensationDescription] = useState('');
  const [cameraActive, setCameraActive] = useState(false);
  const [matchStatus, setMatchStatus] = useState(null); // 'success', 'try-again', null
  const [sensationHistory, setSensationHistory] = useState([]);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Friendly mascot characters
  const mascots = [
    { name: 'Ollie the Owl', icon: '🦉', color: 'from-purple-400 to-purple-600' },
    { name: 'Robbie the Robot', icon: '🤖', color: 'from-blue-400 to-blue-600' },
    { name: 'Bella the Bunny', icon: '🐰', color: 'from-pink-400 to-pink-600' }
  ];
  const [selectedMascot, setSelectedMascot] = useState(mascots[0]);

  // Emotions data
  const emotions = [
    { 
      id: 'happy', 
      name: 'Happy', 
      icon: '😊', 
      description: 'Feeling joyful, pleased, or glad',
      mascotImage: '😊',
      tips: 'Corners of mouth turn up, cheeks lift, eyes crinkle'
    },
    { 
      id: 'sad', 
      name: 'Sad', 
      icon: '😢', 
      description: 'Feeling down, blue, or unhappy',
      mascotImage: '😢',
      tips: 'Corners of mouth turn down, eyebrows slope, eyes may water'
    },
    { 
      id: 'surprised', 
      name: 'Surprised', 
      icon: '😲', 
      description: 'Feeling shocked or amazed',
      mascotImage: '😲',
      tips: 'Eyes widen, mouth opens, eyebrows raise'
    },
    { 
      id: 'angry', 
      name: 'Angry', 
      icon: '😠', 
      description: 'Feeling frustrated or upset',
      mascotImage: '😠',
      tips: 'Eyebrows pull together, lips press tight, nostrils may flare'
    },
    { 
      id: 'scared', 
      name: 'Scared', 
      icon: '😨', 
      description: 'Feeling afraid or worried',
      mascotImage: '😨',
      tips: 'Eyes widen, mouth opens, eyebrows raise and pull together'
    },
    { 
      id: 'calm', 
      name: 'Calm', 
      icon: '😌', 
      description: 'Feeling peaceful and relaxed',
      mascotImage: '😌',
      tips: 'Face relaxed, slight smile, eyes soft'
    }
  ];

  // Body parts for sensation mapping
  const bodyParts = [
    { id: 'head', name: 'Head', icon: '🧠', x: '50%', y: '15%' },
    { id: 'eyes', name: 'Eyes', icon: '👀', x: '50%', y: '25%' },
    { id: 'chest', name: 'Chest', icon: '💓', x: '50%', y: '40%' },
    { id: 'stomach', name: 'Stomach', icon: '🫀', x: '50%', y: '50%' },
    { id: 'hands', name: 'Hands', icon: '👐', x: '30%', y: '60%' },
    { id: 'legs', name: 'Legs', icon: '🦵', x: '50%', y: '75%' }
  ];

  // Sensation descriptors
  const sensationDescriptors = [
    { value: 'warm', label: 'Warm', icon: '🔥' },
    { value: 'cold', label: 'Cold', icon: '❄️' },
    { value: 'tingly', label: 'Tingly', icon: '⚡' },
    { value: 'heavy', label: 'Heavy', icon: '🏋️' },
    { value: 'light', label: 'Light', icon: '🪶' },
    { value: 'tight', label: 'Tight', icon: '🔒' },
    { value: 'relaxed', label: 'Relaxed', icon: '😌' },
    { value: 'fluttery', label: 'Fluttery', icon: '🦋' }
  ];

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setFeedback("Please allow camera access to play the game.");
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
    }
  };

  // Start game
  const startGame = () => {
    setSelectedMascot(mascots[Math.floor(Math.random() * mascots.length)]);
    setCurrentEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
    setGameState('playing');
    setRound(1);
    setScore(0);
    startCamera();
  };

  // Capture and analyze face (simulated)
  const captureAndAnalyze = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const context = canvasRef.current.getContext('2d');
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0);

    // Simulate emotion detection (in real app, this would use a ML model)
    // For demo, we'll randomly succeed 70% of the time
    const isMatch = Math.random() < 0.7;
    
    if (isMatch) {
      setMatchStatus('success');
      setScore(prev => prev + 10);
      setFeedback('✨ Perfect match! You did great! ✨');
      
      // Show sensation popup after successful match
      setTimeout(() => {
        setShowSensationPopup(true);
      }, 1500);
    } else {
      setMatchStatus('try-again');
      setFeedback('🤔 Try again! Look at the mascot and copy the expression.');
    }
  };

  // Handle next round
  const nextRound = () => {
    if (round < 5) {
      setRound(prev => prev + 1);
      const remainingEmotions = emotions.filter(e => e.id !== currentEmotion.id);
      setCurrentEmotion(remainingEmotions[Math.floor(Math.random() * remainingEmotions.length)]);
      setMatchStatus(null);
      setFeedback('');
    } else {
      // Game complete
      setGameState('result');
      stopCamera();
    }
  };

  // Handle body part click
  const handleBodyPartClick = (part) => {
    setSelectedBodyPart(part);
  };

  // Submit sensation description
  const submitSensation = () => {
    if (selectedBodyPart && sensationDescription) {
      const newSensation = {
        id: Date.now(),
        bodyPart: selectedBodyPart.name,
        emotion: currentEmotion.name,
        sensation: sensationDescription,
        descriptors: selectedDescriptors,
        timestamp: new Date().toLocaleTimeString()
      };
      setSensationHistory(prev => [...prev, newSensation]);
      setShowSensationPopup(false);
      setSelectedBodyPart(null);
      setSensationDescription('');
      setSelectedDescriptors([]);
      
      // Move to next round
      nextRound();
    }
  };

  const [selectedDescriptors, setSelectedDescriptors] = useState([]);

  const toggleDescriptor = (descriptor) => {
    setSelectedDescriptors(prev =>
      prev.includes(descriptor)
        ? prev.filter(d => d !== descriptor)
        : [...prev, descriptor]
    );
  };

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Start screen
  if (gameState === 'start') {
      return (
    <section id="emotion">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-12 text-center">
            <span className="text-7xl mb-4 inline-block animate-bounce">🎭</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Emotion Mimicry Game
            </h2>
            <p className="text-purple-100">Learn emotions by copying the mascot!</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How to play:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Watch the friendly mascot show an emotion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Use your camera to copy the expression</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Click on body parts to describe how you feel</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Get points for matching emotions!</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose your mascot:</h3>
                <div className="grid grid-cols-3 gap-3">
                  {mascots.map((mascot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMascot(mascot)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedMascot.name === mascot.name
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <span className="text-4xl block mb-2">{mascot.icon}</span>
                      <span className="text-xs font-medium">{mascot.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Game 🎮
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Camera access is required. Your privacy is important - video is processed locally and not stored.
            </p>
          </div>
        </div>
      </div>
      </section>);
      }

  // Result screen
  if (gameState === 'result') {
    return (
           <section id="emotion">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 px-8 py-12 text-center">
            <span className="text-7xl mb-4 inline-block">🏆</span>
            <h2 className="text-3xl font-bold text-white mb-2">Great Job!</h2>
            <p className="text-white/90">You completed all rounds</p>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {score}
              </div>
              <p className="text-gray-600">Your total score</p>
            </div>

            {/* Sensation history */}
            {sensationHistory.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Body Sensations:</h3>
                <div className="space-y-3">
                  {sensationHistory.map((item, index) => (
                    <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-purple-700">{item.emotion}</span>
                        <span className="text-xs text-gray-500">{item.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">{item.bodyPart}:</span> {item.sensation}
                      </p>
                      <div className="flex gap-1 mt-2">
                        {item.descriptors?.map((d, i) => (
                          <span key={i} className="text-xs bg-white px-2 py-1 rounded-full">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={startGame}
                className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600"
              >
                Play Again
              </button>
              <button
                onClick={() => setGameState('start')}
                className="flex-1 py-3 border-2 border-purple-200 text-purple-600 font-semibold rounded-xl hover:bg-purple-50"
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }

  // Sensation popup
  if (showSensationPopup) {
    return (
        <section id="emotion">
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4">
            <h3 className="text-xl font-bold text-white">How do you feel?</h3>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              You made a <span className="font-semibold text-purple-600">{currentEmotion.name}</span> face!
              Where do you feel this in your body?
            </p>

            {/* Body diagram with clickable parts */}
            <div className="relative w-48 h-64 mx-auto mb-6">
              <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
              <div className="relative w-full h-full">
                {bodyParts.map((part) => (
                  <button
                    key={part.id}
                    onClick={() => handleBodyPartClick(part)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
                      selectedBodyPart?.id === part.id
                        ? 'bg-purple-500 text-white scale-110 shadow-lg'
                        : 'bg-white hover:bg-purple-100 shadow-md'
                    }`}
                    style={{ left: part.x, top: part.y }}
                  >
                    {part.icon}
                  </button>
                ))}
              </div>
            </div>

            {selectedBodyPart && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  You selected: <span className="font-semibold">{selectedBodyPart.name}</span>
                </p>

                {/* Sensation descriptors */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you feel?
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sensationDescriptors.map((desc) => (
                      <button
                        key={desc.value}
                        onClick={() => toggleDescriptor(desc.value)}
                        className={`px-3 py-2 rounded-lg text-sm flex items-center space-x-1 transition-all ${
                          selectedDescriptors.includes(desc.value)
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                        }`}
                      >
                        <span>{desc.icon}</span>
                        <span>{desc.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Describe in words */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe in your own words:
                  </label>
                  <textarea
                    value={sensationDescription}
                    onChange={(e) => setSensationDescription(e.target.value)}
                    placeholder="e.g., My chest feels warm and fluttery..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                    rows="3"
                  />
                </div>

                <button
                  onClick={submitSensation}
                  disabled={!sensationDescription || selectedDescriptors.length === 0}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save & Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </section>
    );
  }

  // Main game screen
  return (
     <section id="emotion">
    <div className="max-w-7xl mx-auto p-4">
      {/* Game header */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl">{selectedMascot.icon}</span>
          <div>
            <p className="text-sm text-gray-500">Round {round}/5</p>
            <p className="text-lg font-semibold text-gray-800">Score: {score}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Current emotion:</p>
          <p className="text-xl font-semibold text-purple-600">{currentEmotion?.name} {currentEmotion?.icon}</p>
        </div>
      </div>

      {/* Split screen */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Mascot side */}
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 border-4 border-purple-200">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Copy this emotion</h3>
          </div>
          <div className="aspect-square bg-white rounded-xl shadow-inner flex items-center justify-center">
            <div className="text-center">
              <div className="text-9xl mb-4 animate-float">
                {selectedMascot.icon}
              </div>
              <div className="text-8xl mb-4">
                {currentEmotion?.mascotImage}
              </div>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                <span className="font-semibold">Tip:</span> {currentEmotion?.tips}
              </p>
            </div>
          </div>
        </div>

        {/* Camera side */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-4 border-blue-200">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-white">Your face</h3>
          </div>
          <div className="aspect-square bg-black rounded-xl overflow-hidden relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Overlay for match status */}
            {matchStatus && (
              <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-all ${
                matchStatus === 'success' ? 'animate-pulse' : ''
              }`}>
                {matchStatus === 'success' ? (
                  <div className="text-center">
                    <div className="text-7xl mb-2">✨</div>
                    <p className="text-white font-bold text-xl">Perfect match!</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-7xl mb-2">🤔</div>
                    <p className="text-white font-bold text-xl">Try again</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback and controls */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {feedback && (
          <div className="text-center mb-4 text-lg text-purple-600 font-medium">
            {feedback}
          </div>
        )}

        <div className="flex justify-center space-x-4">
          {!matchStatus && (
            <button
              onClick={captureAndAnalyze}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              📸 Check my face
            </button>
          )}

          {matchStatus === 'success' && (
            <button
              onClick={nextRound}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Next Round →
            </button>
          )}

          {matchStatus === 'try-again' && (
            <button
              onClick={() => setMatchStatus(null)}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              🔄 Try Again
            </button>
          )}
        </div>

        {/* Quick tips */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>💡 Make sure your face is well-lit and visible</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
    </section>
  );
};