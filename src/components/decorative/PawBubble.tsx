export const PawBubble = () => {
  return (
    <div 
      className="absolute pointer-events-none z-20"
      style={{
        bottom: '0px',
        left: '40px',
        width: '160px',
        height: '160px',
      }}
    >
      <div className="relative w-full h-full">
        <img
          src="/paw.gif"
          alt="Paw"
          className="w-full h-full object-contain"
        />
      </div>

      <div 
        className="absolute bg-white rounded-[18px] px-[30px] py-[25px] shadow-md border-[2px] border-[#00BFFF]"
        style={{
          bottom: '160px',
          left: '1%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}
      >
        <p className="text-[20px] font-semibold text-[#1F4B5E] font-manrope">
          Best of Luck!
        </p>

        <div 
          className="absolute w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-white"
          style={{
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  );
};
