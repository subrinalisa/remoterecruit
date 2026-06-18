const SubtitleButton = ({ text, middle }) => {
  return (
    <>
      <button
        type="button"
        className={`text-[#11142D] font-semibold text-xs bg-[#C2EEFF] rounded-full px-6 py-2 min-w-32 mb-9 ${middle && "mx-auto"}`}
      >
        {text}
      </button>
    </>
  );
};

export default SubtitleButton;
