
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TopicCardProps {
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
  className?: string;
  imageUrl?: string;
}

const TopicCard = ({ title, description, href, icon, className, imageUrl }: TopicCardProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        'block rounded-xl overflow-hidden shadow-md transition-all duration-300',
        'bg-white border hover:shadow-lg transform hover:-translate-y-1',
        className
      )}
    >
      {imageUrl && (
        <div className="h-32 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center mb-2">
          {icon && <div className="mr-3 text-tutorBlue">{icon}</div>}
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </Link>
  );
};

export default TopicCard;
