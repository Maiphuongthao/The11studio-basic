const Section = ({ className, id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`
        relative 
        ${customPaddings || `py-10 px-5 md:px-8`} 
        ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
