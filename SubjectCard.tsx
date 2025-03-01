
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  disabled?: boolean;
  className?: string;
}

const SubjectCard = ({ title, icon: Icon, href, disabled = false, className }: SubjectCardProps) => {
  const cardClasses = cn(
    'flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300',
    'border bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1',
    disabled ? 'opacity-60 cursor-not-allowed' : 'card-hover',
    className
  );

  const content = (
    <>
      <Icon className={cn('w-12 h-12 mb-4', disabled ? 'text-gray-400' : 'text-tutorBlue')} />
      <h3 className={cn('text-lg font-semibold', disabled ? 'text-gray-400' : 'text-gray-800')}>
        {title}
      </h3>
    </>
  );

  if (disabled) {
    return (
      <div className={cardClasses}>
        {content}
        <p className="mt-2 text-xs text-gray-400">Coming Soon</p>
      </div>
    );
  }

  return (
    <Link to={href} className={cardClasses}>
      <div className="absolute inset-0 bg-tutorBlue/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {content}
    </Link>
  );
};

export default SubjectCard;
