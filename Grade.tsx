
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TopicCard from '@/components/UI/TopicCard';
import ActionButton from '@/components/UI/ActionButton';
import { getContentById } from '@/data/learningContent';
import { cn } from '@/lib/utils';

const Grade = () => {
  const { gradeId } = useParams<{ gradeId: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const gradeContent = gradeId ? getContentById(gradeId) : undefined;

  useEffect(() => {
    if (!gradeContent) {
      navigate('/math', { replace: true });
      return;
    }
    setIsLoaded(true);
  }, [gradeContent, navigate]);

  if (!gradeContent) {
    return null;
  }

  const Icon = gradeContent.icon;

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
          <h1 className="text-3xl font-bold text-tutorBlue">{gradeContent.title}</h1>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-lg text-gray-600 max-w-3xl">
          {gradeContent.description || `Explore various topics in ${gradeContent.title}.`}
        </p>
      </div>

      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", isLoaded ? "animate-fade-in" : "opacity-0")}>
        {gradeContent.chapters.map((chapter, index) => {
          const ChapterIcon = chapter.icon;
          return (
            <TopicCard
              key={chapter.id}
              title={chapter.title}
              description={chapter.description}
              href={`/learn/grade/${gradeId}/${chapter.id}`}
              icon={<ChapterIcon className="h-6 w-6" />}
              className={`h-full animate-delay-${index * 100}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grade;
