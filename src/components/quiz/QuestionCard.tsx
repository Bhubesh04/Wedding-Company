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
    <div className="flex flex-col items-center mb-10">
      <div
        id={`question-${question.id}`}
        className="w-[897px] mb-8 bg-[#D3E9F7] rounded-[12px] py-5 px-10 text-center"
        role="heading"
        aria-level={2}
      >
        <h2 className="font-manrope text-[18px] font-bold leading-[26px] text-[#005B8F]">
          {question.text}
        </h2>
      </div>

      <div
        className="flex flex-col gap-[14px] w-[897px]"
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

