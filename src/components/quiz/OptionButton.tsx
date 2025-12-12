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
        w-[897px] h-[72px] rounded-[12px] border border-[1.5px]
        py-5 px-6
        text-center text-[16px] font-bold
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


