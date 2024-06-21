const Heading = ({ className, id, children1, children2 }) => {
  return (
    <div
      id={id}
      className={`
         flex flex-row justify-center text-center uppercase px-auto py-6 ${
           className || ""
         }`}
    >
      <div className={`font-lexend font-light text-md`}>{children1}</div>
      <div className="font-lexend font-light text-xs">{children2}</div>
    </div>
  );
};

export default Heading;
