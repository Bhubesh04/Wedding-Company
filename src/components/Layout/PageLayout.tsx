import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="quiz-background" />
      <div className="quiz-gradient-overlay" />

      <div
        className="relative w-full h-full max-w-6xl rounded-3xl sm:rounded-4xl md:rounded-5xl p-3 sm:p-4 md:p-5 flex flex-col"
        style={{
          background:
            'linear-gradient(135deg, rgba(180, 221, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          className="w-full flex-1 bg-[#F7FCFF] rounded-2xl sm:rounded-3xl md:rounded-4xl border border-[#E0EEF7] shadow-lg overflow-hidden flex flex-col p-4 sm:p-5 md:p-6"
        >
          {children}
        </div>
      </div>
    </main>
  );
};
