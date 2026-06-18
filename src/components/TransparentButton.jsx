const TransparentButton = ({ text, fullwidth }) => {
  return (
    <button
      type="button"
      className={`font-semibold transition-all
                hover:scale-[1.02] text-base text-[#1E3E85] px-8 py-4 min-w-32 rounded-2xl border-2 border-[#53B4DAB1] shadow-2xl ${fullwidth && "w-full"}`}
    >
      {text}
    </button>
  );
};

export default TransparentButton;
