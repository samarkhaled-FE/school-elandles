import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'font-bold rounded-md transition-all duration-300 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-cyan-800 hover:bg-cyan-700 text-white',
    secondary: 'bg-emerald-800 hover:bg-emerald-700 text-white',
    outline: 'bg-transparent border-2 border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-8 text-lg',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className || ''}`;
  
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;