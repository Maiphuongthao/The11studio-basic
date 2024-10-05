const Section = ({ className, id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`
        relative
        ${customPaddings || `px-0 py-0`} 
        ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
