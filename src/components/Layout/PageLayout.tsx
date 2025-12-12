import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="quiz-background" />
      <div className="quiz-gradient-overlay" />

      <div
        className="relative mx-auto w-[96vw] h-[90vh] max-w-[1542px] max-h-[856px] rounded-[60px]"
        style={{
          background:
            'linear-gradient(135deg, rgba(180, 221, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          className="absolute top-[40px] left-[40px] right-[40px] bottom-[56px] bg-[#F7FCFF] rounded-[50px] border border-[#E0EEF7] shadow-lg overflow-visible flex flex-col"
        >
          {children}
        </div>
      </div>
    </main>
  );
};
