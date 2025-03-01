
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import TopicCard from '@/components/UI/TopicCard';
import { Calculator, BookText, FunctionSquare, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import learningContent from '@/data/learningContent';

const Math = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Filter for grade content
  const gradeContent = learningContent.filter(content => content.type === 'grade');
  
  // Filter for topic content
  const topicContent = learningContent.filter(content => content.type === 'topic');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="page-container">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-tutorBlue">Mathematics</h1>
        <p className="text-lg text-gray-600 max-w-3xl mt-2">
          Select a grade or topic to begin your math learning journey.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <BookText className="mr-2 h-6 w-6 text-tutorBlue" />
          <span>By Grade Level</span>
        </h2>
        
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", isLoaded ? "animate-fade-in" : "opacity-0")}>
          {gradeContent.map((grade) => (
            <TopicCard
              key={grade.id}
              title={grade.title}
              description={grade.description}
              href={`/grade/${grade.id}`}
              icon={<grade.icon className="h-6 w-6" />}
              imageUrl={grade.imageUrl}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calculator className="mr-2 h-6 w-6 text-tutorBlue" />
          <span>By Topic</span>
        </h2>
        
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", isLoaded ? "animate-fade-in" : "opacity-0")}>
          {topicContent.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              href={`/topic/${topic.id}`}
              icon={<topic.icon className="h-6 w-6" />}
              imageUrl={topic.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Math;
