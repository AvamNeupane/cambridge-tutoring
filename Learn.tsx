
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, PenLine } from 'lucide-react';
import ActionButton from '@/components/UI/ActionButton';
import { getContentById, getChapterById } from '@/data/learningContent';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

const Learn = () => {
  const { contentType, id, chapterId } = useParams<{ contentType: string; id: string; chapterId?: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const content = id ? getContentById(id) : undefined;
  const chapter = chapterId && id ? getChapterById(id, chapterId) : undefined;

  // Determine back link based on content type
  const backLink = contentType === 'grade' ? `/grade/${id}` : `/topic/${id}`;
  const backText = contentType === 'grade' ? `Back to ${content?.title}` : `Back to ${content?.title}`;

  useEffect(() => {
    if (!content || (chapterId && !chapter)) {
      navigate('/math', { replace: true });
      return;
    }
    setIsLoaded(true);
  }, [content, chapter, navigate, chapterId]);

  if (!content || (chapterId && !chapter)) {
    return null;
  }

  // For grade pages without chapter ID, show chapter selection
  if (contentType === 'grade' && !chapterId) {
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
          <h1 className="text-3xl font-bold text-tutorBlue">Learn: {content.title}</h1>
        </div>

        <div className="mb-8 bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <p className="text-lg text-gray-600">
            Select a topic from {content.title} to start learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.chapters.map((chapter) => {
            const ChapterIcon = chapter.icon;
            return (
              <div key={chapter.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <ChapterIcon className="h-6 w-6 text-tutorBlue mr-2" />
                    <h2 className="text-xl font-semibold">{chapter.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{chapter.description}</p>
                  <div className="flex space-x-3">
                    <ActionButton 
                      href={`/learn/grade/${id}/${chapter.id}`}
                      icon={<BookOpen className="h-4 w-4" />}
                    >
                      Learn
                    </ActionButton>
                    <ActionButton 
                      href={`/practice/${contentType}/${id}/${chapter.id}`}
                      variant="outline"
                      icon={<PenLine className="h-4 w-4" />}
                    >
                      Practice
                    </ActionButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // For specific chapter pages
  if (!chapter) {
    return null;
  }

  return (
    <div className="page-container">
      <div className="mb-6 flex items-center">
        <ActionButton 
          href={backLink} 
          variant="ghost" 
          size="sm"
          icon={<ArrowLeft className="h-4 w-4" />}
          className="mr-2"
        >
          {backText}
        </ActionButton>
        <h1 className="text-3xl font-bold text-tutorBlue">
          Learn: {content.title} {chapterId && `- ${chapter.title}`}
        </h1>
      </div>

      <div className="flex justify-end space-x-3 mb-4">
        <ActionButton 
          href={`/practice/${contentType}/${id}/${chapter.id}`}
          variant="outline"
          icon={<PenLine className="h-4 w-4" />}
        >
          Practice
        </ActionButton>
        <ActionButton 
          href={`/quiz/${contentType}/${id}/${chapter.id}`}
          icon={<BookOpen className="h-4 w-4" />}
        >
          Take Quiz
        </ActionButton>
      </div>

      <div className={cn("bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-gray-100 mb-8", 
        isLoaded ? "animate-fade-in" : "opacity-0")}>
        <div className="prose prose-blue max-w-none">
          {chapter.content?.text && (
            <ReactMarkdown>
              {chapter.content.text}
            </ReactMarkdown>
          )}
        </div>

        {chapter.content?.imageUrl && (
          <div className="my-8">
            <img 
              src={chapter.content.imageUrl} 
              alt={`Illustration for ${chapter.title}`}
              className="rounded-lg mx-auto max-h-96 object-contain" 
            />
          </div>
        )}
      </div>

      {chapter.content?.videoId && (
        <div className={cn("mb-8", isLoaded ? "animate-fade-in animate-delay-200" : "opacity-0")}>
          <h2 className="text-2xl font-semibold mb-4">Video Lesson</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${chapter.content.videoId}?rel=0`}
              title={`${chapter.title} video lesson`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] rounded-xl"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
