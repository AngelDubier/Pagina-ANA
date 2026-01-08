
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true, variant = 'dark' }) => {
  const blueColor = "#003366";
  const yellowColor = "#FFD700";
  const textColor = variant === 'dark' ? blueColor : "#FFFFFF";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        viewBox="0 0 100 80" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: 'inherit' }}
      >
        {/* Forma Izquierda (Azul) */}
        <path 
          d="M25 15L40 65H10L25 15Z" 
          fill={blueColor} 
        />
        <path 
          d="M25 15L45 65H35L25 15Z" 
          fill={blueColor} 
          fillOpacity="0.8"
        />
        
        {/* Forma Derecha (Amarilla) */}
        <path 
          d="M50 20L65 65H45L50 20Z" 
          fill={yellowColor} 
        />
        <path 
          d="M50 20L75 65H60L50 20Z" 
          fill={yellowColor}
        />
      </svg>
      
      {showText && (
        <span 
          className="font-black tracking-tighter text-2xl md:text-3xl" 
          style={{ color: textColor, fontFamily: 'Inter, sans-serif' }}
        >
          A&A
        </span>
      )}
    </div>
  );
};
