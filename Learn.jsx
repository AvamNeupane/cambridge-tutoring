
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Dumbbell } from 'lucide-react';
import ActionButton from '@/components/UI/ActionButton';
import { getContentById, getChapterById } from '@/data/learningContent';
import ReactMarkdown from 'react-markdown';

const Learn = () => {
  const { contentType, id, chapterId } = useParams();
  const navigate = useNavigate();
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  const content = id ? getContentById(id) : undefined;
  const chapter = chapterId && id ? getChapterById(id, chapterId) : undefined;
  
  useEffect(() => {
    if ((!content) || (chapterId && !chapter)) {
      navigate('/math', { replace: true });
      return;
    }
    setIsLoaded(true);
  }, [content, chapter, chapterId, navigate]);
  
  if (!isLoaded) return null;
  
  const renderContent = () => {
    // If no chapter is specified, show all chapters for this content
    if (!chapterId) {
      return (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Chapters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.chapters.map((chapter) => (
                <div 
                  key={chapter.id}
                  className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        {chapter.icon && <chapter.icon className="h-5 w-5 text-blue-600" />}
                      </div>
                      <h3 className="text-xl font-semibold">{chapter.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{chapter.description}</p>
                    <div className="flex space-x-3">
                      <ActionButton 
                        href={`/learn/${contentType}/${id}/${chapter.id}`}
                        size="sm"
                        icon={<BookOpen className="h-4 w-4" />}
                      >
                        Learn
                      </ActionButton>
                      <ActionButton 
                        href={`/practice/${contentType}/${id}/${chapter.id}`}
                        variant="outline"
                        size="sm"
                        icon={<Dumbbell className="h-4 w-4" />}
                      >
                        Practice
                      </ActionButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    
    // If a chapter is specified, show the chapter content
    return (
      <>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-8">
          <div className="prose max-w-none">
            <ReactMarkdown>
              {chapter.content?.text || 'No content available'}
            </ReactMarkdown>
          </div>
          
          {chapter.content?.imageUrl && (
            <div className="mt-8 rounded-lg overflow-hidden">
              <img 
                src={chapter.content.imageUrl} 
                alt={chapter.title}
                className="w-full object-cover h-64 md:h-96"
              />
            </div>
          )}
          
          {chapter.content?.videoId && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Watch and Learn</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${chapter.content.videoId}`}
                  title={`${chapter.title} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-96 rounded-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex space-x-4 justify-center">
          <ActionButton 
            href={`/practice/${contentType}/${id}/${chapter.id}`}
            icon={<Dumbbell className="h-4 w-4" />}
          >
            Practice
          </ActionButton>
          <ActionButton 
            href={`/quiz/${contentType}/${id}/${chapter.id}`}
            variant="outline"
            icon={<BookOpen className="h-4 w-4" />}
          >
            Take Quiz
          </ActionButton>
        </div>
      </>
    );
  };
  
  return (
    <div className="page-container">
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <ActionButton 
            href={chapterId ? (contentType === 'grade' ? `/grade/${id}` : `/topic/${id}`) : '/math'} 
            variant="ghost" 
            size="sm"
            icon={<ArrowLeft className="h-4 w-4" />}
            className="mr-2"
          >
            {chapterId 
              ? (contentType === 'grade' ? `Back to ${content.title}` : `Back to ${content.title}`) 
              : 'Back to Math'
            }
          </ActionButton>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          {chapterId 
            ? `${content.title} - ${chapter.title}` 
            : `Learn: ${content.title}`
          }
        </h1>
        {content.description && !chapterId && (
          <p className="mt-2 text-gray-600">{content.description}</p>
        )}
      </div>
      
      {renderContent()}
    </div>
  );
};

export default Learn;
