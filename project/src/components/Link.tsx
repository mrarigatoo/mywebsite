import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If onClick prop is provided, call it
    if (onClick) onClick();
    
    // Smooth scroll to the target element
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href} 
      className={`text-blue-900 hover:text-blue-600 transition-all hover:scale-105 hover:font-bold ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};