
import { useState, useEffect } from 'react';
import { BookOpen, Calculator, BookText, MessagesSquare, FlaskConical } from 'lucide-react';
import SubjectCard from '@/components/UI/SubjectCard';
import { cn } from '@/lib/utils';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="page-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        {/* Left side - Hero image */}
        <div className={cn(
          "flex flex-col items-center lg:items-start justify-center space-y-6",
          isLoaded ? "animate-fade-in" : "opacity-0"
        )}>
          <span className="inline-block bg-tutorBlue-light text-tutorBlue px-4 py-1 rounded-full text-sm font-medium">
            Your Learning Journey Begins Here
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
            Learning Made <span className="text-tutorBlue">Simple</span> & <span className="text-tutorBlue">Fun</span>
          </h1>
          <p className="text-lg text-gray-600 text-center lg:text-left max-w-md">
            Personalized tutoring services for students of all ages. Start your educational journey today!
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
            <BookOpen className="text-tutorBlue h-16 w-16 lg:h-24 lg:w-24 animate-pulse-slow" />
          </div>
        </div>

        {/* Right side - Subject buttons */}
        <div className={cn(
          "flex flex-col items-center justify-center space-y-6",
          isLoaded ? "animate-slide-in" : "opacity-0"
        )}>
          <h2 className="text-2xl font-semibold mb-4">Select a Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mx-auto">
            <SubjectCard 
              title="Mathematics" 
              icon={Calculator} 
              href="/math" 
              className="col-span-1 md:col-span-2 bg-tutorBlue/5"
            />
            <SubjectCard 
              title="Science" 
              icon={FlaskConical} 
              href="/" 
              disabled 
            />
            <SubjectCard 
              title="Social Studies" 
              icon={BookText} 
              href="/" 
              disabled 
            />
            <SubjectCard 
              title="English" 
              icon={BookText} 
              href="/" 
              disabled 
            />
            <SubjectCard 
              title="AI Chatbot" 
              icon={MessagesSquare} 
              href="/chatbot" 
              className="col-span-1 md:col-span-2 bg-tutorBlue/5"  
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
