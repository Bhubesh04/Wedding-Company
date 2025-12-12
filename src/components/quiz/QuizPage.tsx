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
      className="relative w-full h-full flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5"
    >
      <div className="flex flex-col items-center w-full max-w-4xl gap-2 sm:gap-3">
        <header className="text-center w-full">
          <h1
            className="font-serif-display font-normal italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#005B8F] text-center leading-tight"
            style={{ letterSpacing: '-2px' }}
          >
            Test Your Knowledge
          </h1>
        </header>

        <div className="text-center w-full">
          <p
            className="font-manrope font-normal text-xs sm:text-sm md:text-base leading-snug text-[#15313D] text-center"
            style={{ letterSpacing: '-0.2px' }}
          >
            Answer all questions to see your results
          </p>
        </div>

        <div className="w-full mt-2 sm:mt-3">
          <ProgressBar
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
          />
        </div>

        <div className="w-full flex items-end justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <QuestionCard
              question={currentQuestion}
              selectedOptionId={selectedOptionId}
              onSelectOption={handleSelectOption}
            />
          </div>

          <div className="flex-shrink-0">
            <NavigationButtons
              onPrevious={handlePrevious}
              onNext={handleNext}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
              isLastQuestion={isLastQuestion}
            />
          </div>
        </div>
      </div>

      {currentQuestionIndex === 0 && <PawBubble />}
    </motion.div>
  );
};

