
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  icon?: ReactNode;
}

const ActionButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className,
  icon,
  ...props 
}: ActionButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-tutorBlue focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-tutorBlue text-white hover:bg-tutorBlue-dark',
    secondary: 'bg-tutorBlue-light text-tutorBlue-dark hover:bg-tutorBlue/10',
    outline: 'border border-tutorBlue text-tutorBlue hover:bg-tutorBlue/10',
    ghost: 'text-tutorBlue hover:bg-tutorBlue/10'
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {buttonContent}
    </button>
  );
};

export default ActionButton;
