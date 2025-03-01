
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TopicCard from '@/components/UI/TopicCard';
import ActionButton from '@/components/UI/ActionButton';
import { getContentById } from '@/data/learningContent';
import { cn } from '@/lib/utils';

const Topic = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const topicContent = topicId ? getContentById(topicId) : undefined;

  useEffect(() => {
    if (!topicContent) {
      navigate('/math', { replace: true });
      return;
    }
    setIsLoaded(true);
  }, [topicContent, navigate]);

  if (!topicContent) {
    return null;
  }

  const Icon = topicContent.icon;

  return (
    <div className="page-container">
      <div className="mb-6 flex items-center">
        <ActionButton 
          href="/math" 
          variant="ghost" 
          size="sm"
          icon={<ArrowLeft className="h-4 w-4" />}
          className="mr-2"
        >
          Back to Math
        </ActionButton>
        <div className="flex items-center">
          <Icon className="h-8 w-8 text-tutorBlue mr-2" />
          <h1 className="text-3xl font-bold text-tutorBlue">{topicContent.title}</h1>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-3">Introduction to {topicContent.title}</h2>
          <p className="text-gray-600">
            {topicContent.title === 'Calculus' ? (
              <>
                Calculus is a branch of mathematics that focuses on limits, derivatives, integrals, and infinite series. 
                It was developed in the late 17th century independently by Isaac Newton and Gottfried Wilhelm Leibniz. 
                Calculus allows us to understand how quantities change and is fundamental to many fields including physics, 
                engineering, economics, and medicine.
              </>
            ) : topicContent.title === 'Statistics' ? (
              <>
                Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and 
                presentation of data. It provides tools to make sense of large amounts of data, identify patterns, and 
                draw meaningful conclusions. Statistics is essential in research, business decisions, policy-making, 
                and many other areas where data-driven decisions are important.
              </>
            ) : (
              topicContent.description
            )}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Chapters</h2>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", isLoaded ? "animate-fade-in" : "opacity-0")}>
        {topicContent.chapters.map((chapter, index) => {
          const ChapterIcon = chapter.icon;
          return (
            <TopicCard
              key={chapter.id}
              title={chapter.title}
              description={chapter.description}
              href={`/learn/topic/${topicId}/${chapter.id}`}
              icon={<ChapterIcon className="h-6 w-6" />}
              className={`h-full animate-delay-${index * 100}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Topic;
