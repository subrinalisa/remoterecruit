const MainTitle = ({ text, middle }) => {
  return (
    <h2
      className={`font-semibold md:text-[40px] text-xl text-[#11142D] mb-8 max-w-130 ${middle && "mx-auto"}`}
    >
      {text}
    </h2>
  );
};

export default MainTitle;
