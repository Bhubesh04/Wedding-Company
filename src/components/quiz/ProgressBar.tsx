import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
}

export const ProgressBar = ({ currentIndex, totalQuestions }: ProgressBarProps) => {
  const segments = Array.from({ length: totalQuestions }, (_, i) => i);
  
  return (
    <div className="w-full flex gap-2 sm:gap-3 mb-4 sm:mb-5">
      {segments.map((index) => (
        <div
          key={index}
          className="flex-1 h-1 sm:h-[4px] bg-[#D3DFE8] rounded-full overflow-hidden relative"
        >
          {index === currentIndex && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full bg-[#003D66] rounded-full"
            />
          )}
          {index < currentIndex && (
            <div className="h-full bg-[#003D66] rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
};


