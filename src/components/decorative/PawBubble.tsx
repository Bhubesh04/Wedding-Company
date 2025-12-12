export const PawBubble = () => {
  return (
    <div 
      className="fixed pointer-events-none z-50"
      style={{
        bottom: '50px',
        left: '5px',
        width: '140px',
        height: '140px',
      }}
    >
      {/* LEFT SECTION - PAW GIF AND BUBBLE */}
      <div className="relative w-full h-full">
        <img
          src="/paw.gif"
          alt="Paw"
          className="w-full h-full object-contain"
        />
      </div>

      {/* BEST OF LUCK BUBBLE - LEFT SIDE - ABOVE ALL CONTENT */}
      <div 
        className="absolute bg-white rounded-2xl px-4 sm:px-5 py-2 sm:py-3 shadow-xl border-2 border-[#00BFFF]"
        style={{
          bottom: '120px',
          left: '-30px',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          zIndex: 100,
        }}
      >
        <p className="text-sm sm:text-base font-semibold text-[#1F4B5E] font-manrope">
          Best of Luck!
        </p>

        <div 
          className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"
          style={{
            bottom: '-7px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  );
};
