import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ResultPageProps {
  score: number;
  onReset: () => void;
}

export const ResultPage = ({ score, onReset }: ResultPageProps) => {
  const [displayedScore, setDisplayedScore] = useState(0);

  useEffect(() => {
    let interval: number;
    if (displayedScore < score) {
      interval = setInterval(() => {
        setDisplayedScore((prev) => Math.min(prev + 2, score));
      }, 30);
    }
    return () => clearInterval(interval);
  }, [displayedScore, score]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full flex flex-col items-center justify-center gap-10"
    >
      <div className="inline-block px-6 py-2 bg-orange-100 rounded-full">
        <p
          className="font-manrope font-medium text-[20px] leading-[24px] text-[#15313D] text-center"
          style={{ letterSpacing: '-0.31px' }}
        >
          Keep Learning!
        </p>
      </div>

      <h2
        className="font-serif-display font-normal italic text-[48px] text-[#15313D] text-center"
        style={{ letterSpacing: '-2px' }}
      >
        Your Final score is
      </h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <p
          className="font-serif-display font-bold text-[120px] text-[#15313D]"
          style={{ letterSpacing: '-4px' }}
        >
          {displayedScore}%
        </p>
      </motion.div>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 w-[320px] h-[64px] rounded-[10px] bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF] hover:from-[#B0D9F0] hover:to-[#D4F0FF] text-[#15313D] font-manrope font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#15313D] focus:ring-offset-2 border border-gray-300"
        aria-label="Start quiz again"
      >
        Start Again
      </button>
    </motion.div>
  );
};
