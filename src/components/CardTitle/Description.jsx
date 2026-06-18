const Description = ({ text, middle }) => {
  return (
    <p className={`lg:text-[19px] max-w-120 ${middle && "mx-auto"}`}>{text}</p>
  );
};

export default Description;
