import { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 'q1',
    text: '1. What sound does a cat make?',
    options: [
      { id: 'q1-a1', label: 'Bhau-Bhau', isCorrect: false },
      { id: 'q1-a2', label: 'Meow-Meow', isCorrect: true },
      { id: 'q1-a3', label: 'Oink-Oink', isCorrect: false },
      { id: 'q1-a4', label: 'Moo-Moo', isCorrect: false },
    ],
  },
  {
    id: 'q2',
    text: '2. What is the capital of France?',
    options: [
      { id: 'q2-a1', label: 'London', isCorrect: false },
      { id: 'q2-a2', label: 'Berlin', isCorrect: false },
      { id: 'q2-a3', label: 'Paris', isCorrect: true },
      { id: 'q2-a4', label: 'Madrid', isCorrect: false },
    ],
  },
  {
    id: 'q3',
    text: '3. Which planet is known as the Red Planet?',
    options: [
      { id: 'q3-a1', label: 'Venus', isCorrect: false },
      { id: 'q3-a2', label: 'Mars', isCorrect: true },
      { id: 'q3-a3', label: 'Jupiter', isCorrect: false },
      { id: 'q3-a4', label: 'Saturn', isCorrect: false },
    ],
  },
  {
    id: 'q4',
    text: '4. What is 2 + 2?',
    options: [
      { id: 'q4-a1', label: '3', isCorrect: false },
      { id: 'q4-a2', label: '4', isCorrect: true },
      { id: 'q4-a3', label: '5', isCorrect: false },
    ],
  },
  {
    id: 'q5',
    text: '5. Which ocean is the largest?',
    options: [
      { id: 'q5-a1', label: 'Atlantic Ocean', isCorrect: false },
      { id: 'q5-a2', label: 'Indian Ocean', isCorrect: false },
      { id: 'q5-a3', label: 'Pacific Ocean', isCorrect: true },
      { id: 'q5-a4', label: 'Arctic Ocean', isCorrect: false },
    ],
  },
];


