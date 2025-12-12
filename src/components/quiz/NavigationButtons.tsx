interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

export const NavigationButtons = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
}: NavigationButtonsProps) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-center justify-center">
      {/* LEFT CONTROL - PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none border shadow-sm ${
          canGoPrevious
            ? 'bg-[#E5F0FA] text-[#2C3E50] border-[#C6E5FF] hover:bg-[#D4E8FF]'
            : 'bg-[#E5F0FA] text-gray-300 cursor-not-allowed border-[#C6E5FF]'
        }`}
        aria-label="Previous question"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      
      {/* RIGHT CONTROL - NEXT BUTTON */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none border shadow-sm ${
          canGoNext
            ? 'bg-[#5BA3E5] hover:bg-[#4A90D9] text-white border-[#4A90D9] hover:shadow-md'
            : 'bg-[#E5F0FA] text-gray-300 cursor-not-allowed border-[#C6E5FF]'
        }`}
        aria-label={isLastQuestion ? 'Submit quiz' : 'Next question'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};


