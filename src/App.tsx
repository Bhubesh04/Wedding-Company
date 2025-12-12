import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PageLayout } from './components/Layout/PageLayout';
import { QuizPage } from './components/quiz/QuizPage';
import { ResultPage } from './components/results/ResultPage';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setScore(0);
  };

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        {!showResults ? (
          <QuizPage key="quiz" onComplete={handleQuizComplete} />
        ) : (
          <ResultPage key="results" score={score} onReset={handleReset} />
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

export default App;


