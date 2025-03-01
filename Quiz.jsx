
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';
import ActionButton from '@/components/UI/ActionButton';
import { getContentById, getChapterById } from '@/data/learningContent';
import { cn } from '@/lib/utils';

const Quiz = () => {
  const { contentType, id, chapterId } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const content = id ? getContentById(id) : undefined;
  const chapter = chapterId && id ? getChapterById(id, chapterId) : undefined;
  const questions = chapter?.practice?.questions || [];

  useEffect(() => {
    if (!content || !chapter || !chapter.practice) {
      navigate('/math', { replace: true });
      return;
    }
    setIsLoaded(true);
  }, [content, chapter, navigate]);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    
    // Basic if statement for checking answers
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Incorrect! The correct answer is " + questions[currentQuestion].answer);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  if (!content || !chapter || questions.length === 0) {
    return null;
  }

  // Show results if all questions are answered
  if (showResults) {
    return (
      <div className="page-container">
        <div className="mb-6 flex items-center">
          <ActionButton 
            href={`/learn/${contentType}/${id}/${chapterId}`} 
            variant="ghost" 
            size="sm"
            icon={<ArrowLeft className="h-4 w-4" />}
            className="mr-2"
          >
            Back to Lesson
          </ActionButton>
          <h1 className="text-3xl font-bold text-blue-600">
            Quiz Results
          </h1>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 mb-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Quiz Completed!</h2>
          
          <div className="mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {score} / {questions.length}
            </div>
            <p className="text-lg text-gray-700">
              {score === questions.length 
                ? "Perfect! You've mastered this topic!" 
                : score >= questions.length / 2 
                  ? "Great job! Keep practicing to improve." 
                  : "Keep practicing! You'll get better with more attempts."}
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <ActionButton onClick={handleRestart}>
              Try Again
            </ActionButton>
            <ActionButton 
              href={`/learn/${contentType}/${id}/${chapterId}`}
              variant="outline"
            >
              Return to Lesson
            </ActionButton>
          </div>
        </div>
      </div>
    );
  }

  // Show the current question
  const question = questions[currentQuestion];

  return (
    <div className="page-container">
      <div className="mb-6 flex items-center">
        <ActionButton 
          href={`/learn/${contentType}/${id}/${chapterId}`} 
          variant="ghost" 
          size="sm"
          icon={<ArrowLeft className="h-4 w-4" />}
          className="mr-2"
        >
          Back to Lesson
        </ActionButton>
        <h1 className="text-3xl font-bold text-blue-600">
          Quiz: {content.title} - {chapter.title}
        </h1>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 mb-8 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-gray-500">Score: {score}</span>
        </div>
        
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        
        <div className="space-y-3 mb-8">
          {question.options && question.options.map((option, index) => (
            <button
              key={index}
              className="w-full text-left p-4 rounded-lg border hover:bg-gray-50 border-gray-200"
              onClick={() => handleSelectAnswer(option)}
            >
              <div className="flex items-center">
                <div className="h-5 w-5 flex items-center justify-center border border-gray-300 rounded-full mr-2">
                  <span className="text-xs">{String.fromCharCode(65 + index)}</span>
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
