# Quiz Application - Test Your Knowledge

A pixel-perfect desktop quiz interface built to exact Figma specifications using React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Exact Figma Match**: Built to precise pixel specifications
- **Custom Typography**: DM Serif Display and Manrope fonts
- **Background Image**: Cloud.png with tint overlay and gradient effects
- **Fluffy Paw Design**: CSS-based fluffy white cloud-like paw with "Best of Luck!" speech bubble
- **Interactive Quiz**: Progress tracking, answer selection, and score calculation
- **Results Screen**: Beautiful results display with animated score percentage
- **Fully Accessible**: Keyboard navigation, ARIA labels, and focus indicators

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS (with arbitrary values for exact pixel matching)
- Framer Motion for smooth animations
- Vite for build tooling
- Google Fonts (DM Serif Display, Manrope)

## Getting Started

### Installation

```bash
npm install
```

### Required Assets

Before running the application, place this asset in the `public` folder:

1. **Cloud.png** - Background image (optional, will work without it)

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── PageLayout.tsx        # Background and main card
│   ├── quiz/
│   │   ├── QuizPage.tsx          # Main quiz orchestrator
│   │   ├── QuestionCard.tsx      # Question and options container
│   │   ├── OptionButton.tsx      # Individual answer option button
│   │   ├── ProgressBar.tsx       # Progress indicator
│   │   └── NavigationButtons.tsx  # Prev/Next buttons
│   ├── results/
│   │   └── ResultPage.tsx        # Results screen
│   └── decorative/
│       └── PawBubble.tsx          # Fluffy paw and speech bubble
├── data/
│   └── quizData.ts               # Quiz questions data
├── types/
│   └── quiz.ts                   # TypeScript type definitions
├── App.tsx                       # Main app component
├── main.tsx                      # Entry point
└── index.css                     # Global styles and background setup
```

## Usage

1. Answer each question by clicking on an option
2. Use the navigation buttons (← →) to move between questions
3. You can go back and change your answers
4. Complete all questions to see your results
5. Click "Start Again" to reset and retake the quiz

## Accessibility

- Semantic HTML elements (`<main>`, `<header>`, `<button>`)
- Keyboard navigation support (Tab, Enter, Space)
- ARIA labels and roles (`radiogroup`, `radio`, `aria-checked`)
- Visible focus indicators (ring styles)
- Screen reader friendly


