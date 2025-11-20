import { ReactNode, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  ariaLabel,
}: CardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-effect rounded-xl p-6 ${
        onClick ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60' : ''
      } ${className}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </motion.div>
  );
};

