import { Question } from '../../types/quiz';
import { OptionButton } from './OptionButton';

interface QuestionCardProps {
  question: Question;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
}

export const QuestionCard = ({
  question,
  selectedOptionId,
  onSelectOption,
}: QuestionCardProps) => {
  return (
    <div className="flex flex-col items-center w-full mb-3 sm:mb-4">
      <div
        id={`question-${question.id}`}
        className="w-full mb-3 sm:mb-4 bg-[#D3E9F7] rounded-lg py-3 px-4 sm:px-5 text-center"
        role="heading"
        aria-level={2}
      >
        <h2 className="font-manrope text-sm sm:text-base md:text-lg font-bold leading-tight sm:leading-normal text-[#005B8F]">
          {question.text}
        </h2>
      </div>

      <div
        className="flex flex-col gap-2 sm:gap-3 w-full"
        role="radiogroup"
        aria-labelledby={`question-${question.id}`}
      >
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          
          return (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={isSelected}
              onSelect={() => onSelectOption(option.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

