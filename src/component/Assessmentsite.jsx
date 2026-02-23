import react , { useState } from "react"
export const Assessmentsite = () => {
    const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const assessmentSteps = [
    {
      id: 1,
      title: 'Welcome to the Self-Assessment',
      description: 'This tool helps you reflect on your experiences and preferences. Take your time—there are no right or wrong answers.',
      icon: '🌿',
      color: 'from-purple-400 to-blue-400'
    },
    {
      id: 2,
      category: 'Communication',
      questions: [
        {
          id: 'comm1',
          text: 'I prefer written communication over verbal conversations',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'comm2',
          text: 'I need extra time to process spoken information',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'comm3',
          text: 'I find it easier to express myself through writing or typing',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        }
      ]
    },
    {
      id: 3,
      category: 'Sensory Experiences',
      questions: [
        {
          id: 'sense1',
          text: 'Bright lights or loud sounds can be overwhelming for me',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'sense2',
          text: 'I notice small details that others might miss',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'sense3',
          text: 'Certain textures or fabrics feel uncomfortable',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        }
      ]
    },
    {
      id: 4,
      category: 'Social Interaction',
      questions: [
        {
          id: 'social1',
          text: 'I enjoy socializing but need breaks to recharge',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'social2',
          text: 'I find group conversations difficult to follow',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'social3',
          text: 'I prefer deep conversations about specific interests',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        }
      ]
    },
    {
      id: 5,
      category: 'Routines & Interests',
      questions: [
        {
          id: 'routine1',
          text: 'I feel calm when I follow familiar routines',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'routine2',
          text: 'I have intense interests that I enjoy focusing on',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        },
        {
          id: 'routine3',
          text: 'Changes in plans can be stressful for me',
          options: ['Often true', 'Sometimes true', 'Rarely true', 'Not true']
        }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const calculateResults = () => {
    setIsLoading(true);
    // Simulate calculation
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const restartAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const getProgressPercentage = () => {
    const totalQuestions = assessmentSteps.slice(1).reduce((acc, step) => 
      acc + (step.questions?.length || 0), 0);
    const answeredQuestions = Object.keys(answers).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  // Welcome screen
  if (currentStep === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${assessmentSteps[0].color} px-8 py-12 text-center`}>
            <span className="text-6xl mb-4 inline-block">{assessmentSteps[0].icon}</span>
            <h2 className="text-3xl font-bold text-white mt-4">{assessmentSteps[0].title}</h2>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {assessmentSteps[0].description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-purple-500 text-xl">✨</span>
                <p className="text-sm text-gray-600">Answer at your own pace - you can pause anytime</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-xl">🕊️</span>
                <p className="text-sm text-gray-600">This is for self-reflection, not medical diagnosis</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">🌱</span>
                <p className="text-sm text-gray-600">Your responses are private and not stored</p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 px-8 py-12 text-center">
            <span className="text-6xl mb-4 inline-block">🌟</span>
            <h2 className="text-3xl font-bold text-white">Your Reflection Complete</h2>
          </div>

          <div className="p-8 space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Thank you for taking time to reflect on your experiences.
              </p>
              <div className="inline-block bg-purple-100 rounded-full px-6 py-3">
                <span className="text-purple-700 font-semibold">
                  {Object.keys(answers).length} responses shared
                </span>
              </div>
            </div>

            {/* Gentle insights */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-xl mr-2">💭</span>
                Gentle Insights
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Every person's neurology is unique and valid</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Your preferences and needs are important</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Consider sharing these reflections with a trusted person</span>
                </li>
              </ul>
            </div>

            {/* Recommended resources based on patterns */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-xl mr-2">📚</span>
               你可能感兴趣的资源
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-gray-50 rounded-xl text-left hover:bg-purple-50 transition-colors">
                  <span className="text-2xl block mb-2">😊</span>
                  <span className="text-sm font-medium">Emotion Tools</span>
                </button>
                <button className="p-3 bg-gray-50 rounded-xl text-left hover:bg-purple-50 transition-colors">
                  <span className="text-2xl block mb-2">💬</span>
                  <span className="text-sm font-medium">Communication Aids</span>
                </button>
                <button className="p-3 bg-gray-50 rounded-xl text-left hover:bg-purple-50 transition-colors">
                  <span className="text-2xl block mb-2">🌿</span>
                  <span className="text-sm font-medium">Sensory Tools</span>
                </button>
                <button className="p-3 bg-gray-50 rounded-xl text-left hover:bg-purple-50 transition-colors">
                  <span className="text-2xl block mb-2">👥</span>
                  <span className="text-sm font-medium">Community</span>
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={restartAssessment}
                className="flex-1 py-3 border-2 border-purple-200 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors"
              >
                Take Again
              </button>
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-colors"
              >
                Save Reflection
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Questions screen
  const currentStepData = assessmentSteps[currentStep];
  const progress = getProgressPercentage();

  return (
    <>
    <header className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-20">
          {/* Logo centered */}
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
        </div>
      </nav>
    </header>
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-2 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              Step {currentStep} of {assessmentSteps.length - 1}
            </span>
            <span className="text-sm font-medium text-purple-600">
              {progress}% complete
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{currentStepData.category}</h2>
        </div>

        {/* Questions */}
        <div className="px-8 py-4 space-y-6">
          {currentStepData.questions?.map((question, qIndex) => (
            <div key={question.id} className="space-y-3">
              <p className="text-gray-700">
                <span className="text-purple-500 font-medium mr-2">{qIndex + 1}.</span>
                {question.text}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(question.id, option)}
                    className={`p-2 text-xs sm:text-sm rounded-lg border transition-all duration-200 ${
                      answers[question.id] === option
                        ? 'border-purple-500 bg-purple-50 text-purple-700 font-medium'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="px-8 py-6 bg-gray-50 flex justify-between">
          <button
            onClick={handlePrevious}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-white transition-colors"
          >
            Previous
          </button>
          
          {isLoading ? (
            <div className="px-6 py-2 bg-purple-100 rounded-lg">
              <svg className="animate-spin h-5 w-5 text-purple-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentStepData.questions?.some(q => !answers[q.id])}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === assessmentSteps.length - 1 ? 'See Results' : 'Continue'}
            </button>
          )}
        </div>

        {/* Comfort note */}
        <div className="px-8 py-3 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Take breaks as needed. Your comfort is important.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};