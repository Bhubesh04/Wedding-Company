export type AnswerOption = {
  id: string;
  label: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  text: string;
  options: AnswerOption[];
};

export type QuizState = {
  currentQuestionIndex: number;
  selectedAnswers: Record<string, string>; // questionId -> optionId
  totalCorrect: number;
};


