import { motion } from 'framer-motion';
import { AnswerOption } from '../../types/quiz';

interface OptionButtonProps {
  option: AnswerOption;
  isSelected: boolean;
  onSelect: () => void;
}

export const OptionButton = ({ option, isSelected, onSelect }: OptionButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full h-auto min-h-11 sm:min-h-12 md:min-h-14 rounded-lg border border-[1.5px]
        py-2 sm:py-3 px-3 sm:px-4 md:px-5
        text-center text-xs sm:text-sm md:text-base font-bold
        transition-all duration-200
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-[#15313D] focus:ring-offset-2
        ${
          isSelected
            ? 'bg-[#4A90E2] text-white font-bold shadow-md border-[#4A90E2]'
            : 'bg-[#D3E9F7] text-[#15313D] border-[#B3D9F0] hover:bg-[#C6E1F0] hover:shadow-sm'
        }
      `}
      role="radio"
      aria-checked={isSelected}
      aria-label={option.label}
    >
      {option.label}
    </motion.button>
  );
};


