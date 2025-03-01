
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, HelpCircle, Lightbulb } from 'lucide-react';
import ActionButton from '@/components/UI/ActionButton';
import { getContentById, getChapterById } from '@/data/learningContent';
import { cn } from '@/lib/utils';

const Practice = () => {
  const { contentType, id, chapterId } = useParams<{ contentType: string; id: string; chapterId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
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

  const handleSelectAnswer = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const correct = answer === questions[currentQuestion].answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  // Determine back link based on content type
  const backLink = contentType === 'grade' ? `/grade/${id}` : `/topic/${id}`;
  const backText = contentType === 'grade' ? `Back to ${content?.title}` : `Back to ${content?.title}`;

  if (!content || !chapter || questions.length === 0) {
    return null;
  }

  // When showing practice mode instructions
  if (!isAnswered && !showResults && currentQuestion === 0 && !selectedAnswer) {
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
          <h1 className="text-3xl font-bold text-tutorBlue">
            Practice: {content.title} - {chapter.title}
          </h1>
        </div>

        <div className={cn("bg-white shadow-lg rounded-xl p-8 border border-gray-100 mb-8 max-w-3xl mx-auto", 
          isLoaded ? "animate-fade-in" : "opacity-0")}>
          <div className="flex items-center mb-6">
            <Lightbulb className="h-8 w-8 text-tutorBlue mr-3" />
            <h2 className="text-2xl font-semibold">Practice Mode</h2>
          </div>
          
          <div className="mb-6 text-gray-700">
            <p className="mb-4">You'll be presented with 5 practice questions related to {chapter.title}.</p>
            <p className="mb-4">For each question:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Read the question carefully</li>
              <li>Select your answer</li>
              <li>Get instant feedback</li>
              <li>Continue to the next question</li>
            </ul>
            <p>Ready to begin? Good luck!</p>
          </div>
          
          <div className="flex justify-center">
            <ActionButton onClick={() => setSelectedAnswer('')}>
              Start Practice
            </ActionButton>
          </div>
        </div>
      </div>
    );
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
          <h1 className="text-3xl font-bold text-tutorBlue">
            Practice Results
          </h1>
        </div>

        <div className={cn("bg-white shadow-lg rounded-xl p-8 border border-gray-100 mb-8 max-w-3xl mx-auto text-center", 
          isLoaded ? "animate-fade-in" : "opacity-0")}>
          <h2 className="text-2xl font-semibold mb-6">Practice Completed!</h2>
          
          <div className="mb-6">
            <div className="text-6xl font-bold text-tutorBlue mb-4">
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
        <h1 className="text-3xl font-bold text-tutorBlue">
          Practice: {content.title} - {chapter.title}
        </h1>
      </div>

      <div className={cn("bg-white shadow-lg rounded-xl p-8 border border-gray-100 mb-8 max-w-3xl mx-auto", 
        isLoaded ? "animate-fade-in" : "opacity-0")}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-gray-500">Score: {score}</span>
        </div>
        
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        
        <div className="space-y-3 mb-8">
          {question.options && question.options.map((option, index) => (
            <button
              key={index}
              className={cn(
                "w-full text-left p-4 rounded-lg border transition-all",
                selectedAnswer === option ? 
                  isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300' : 
                  'hover:bg-gray-50 border-gray-200'
              )}
              onClick={() => handleSelectAnswer(option)}
              disabled={isAnswered}
            >
              <div className="flex items-center">
                {isAnswered && selectedAnswer === option && (
                  isCorrect ? 
                    <Check className="h-5 w-5 text-green-500 mr-2" /> : 
                    <X className="h-5 w-5 text-red-500 mr-2" />
                )}
                {isAnswered && option === question.answer && selectedAnswer !== option && (
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                )}
                {!isAnswered && (
                  <div className="h-5 w-5 flex items-center justify-center border border-gray-300 rounded-full mr-2">
                    <span className="text-xs">{String.fromCharCode(65 + index)}</span>
                  </div>
                )}
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
        
        {isAnswered && (
          <div className={cn(
            "mb-6 p-4 rounded-lg",
            isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          )}>
            <div className="flex items-start">
              {isCorrect ? (
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              )}
              <div>
                <p className="font-medium">
                  {isCorrect ? "Correct!" : "Not quite right..."}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {isCorrect 
                    ? "Great job! Let's continue to the next question." 
                    : `The correct answer is: ${question.answer}`}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-end">
          {isAnswered ? (
            <ActionButton onClick={handleNextQuestion}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </ActionButton>
          ) : (
            <div className="text-gray-400 flex items-center">
              <HelpCircle className="h-4 w-4 mr-1" />
              <span className="text-sm">Select an answer to continue</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practice;
