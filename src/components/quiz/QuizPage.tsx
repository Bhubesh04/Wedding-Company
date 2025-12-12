import { useState } from 'react';
import { motion } from 'framer-motion';
import { quizQuestions } from '../../data/quizData';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { NavigationButtons } from './NavigationButtons';
import { PawBubble } from '../decorative/PawBubble';

interface QuizPageProps {
  onComplete: (score: number) => void;
}

export const QuizPage = ({ onComplete }: QuizPageProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedOptionId = selectedAnswers[currentQuestion.id] || null;
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const canGoNext = selectedOptionId !== null;
  const canGoPrevious = currentQuestionIndex > 0;

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!canGoNext) return;

    if (isLastQuestion) {
      const totalCorrect = quizQuestions.reduce((count, question) => {
        const selectedOptionId = selectedAnswers[question.id];
        const selectedOption = question.options.find(
          (opt) => opt.id === selectedOptionId
        );
        return count + (selectedOption?.isCorrect ? 1 : 0);
      }, 0);

      const score = Math.round((totalCorrect / quizQuestions.length) * 100);
      onComplete(score);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative w-full h-full flex flex-col px-4 md:px-[80px]"
    >
      <div className="flex flex-col items-center w-full flex-1 pt-[60px] gap-6 pb-[100px]">
        <header className="text-center w-full">
          <h1
            className="font-serif-display font-normal italic text-[56px] text-[#005B8F] text-center leading-tight"
            style={{ letterSpacing: '-2px' }}
          >
            Test Your Knowledge
          </h1>
        </header>

        <div className="text-center w-full">
          <p
            className="font-manrope font-normal text-[16px] leading-[22px] text-[#15313D] text-center"
            style={{ letterSpacing: '-0.2px' }}
          >
            Answer all questions to see your results
          </p>
        </div>

        <div className="w-full max-w-[897px] px-4">
          <ProgressBar
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
          />
        </div>

        <div className="w-full max-w-[897px] px-4">
          <QuestionCard
            question={currentQuestion}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleSelectOption}
          />
        </div>
      </div>

      <div className="absolute bottom-[40px] right-4 md:right-[80px] flex gap-[16px]">
        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          isLastQuestion={isLastQuestion}
        />
      </div>

      {currentQuestionIndex === 0 && <PawBubble />}
    </motion.div>
  );
};

