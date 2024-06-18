const ChevronSvg = ({ openServices }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="20"
      height="12"
      viewBox="0 0 20 12"
      stroke="currentColor"
      className="size-4 overflow-visible"
    >
      <rect
        className="transition-all origin-center"
        x={openServices ? "0" : "-5"}
        y={openServices ? "0" : "-5"}
        width="20"
        height="2"
        rx="1"
        fill="black"
        transform={`rotate(${openServices ? "45" : "135"})`}
      />
      <rect
        className="transition-all origin-center"
        x={openServices ? "-5" : "0"}
        y={openServices ? "-5" : "0"}
        width="20"
        height="2"
        fill="black"
        rx="1"
        transform={`rotate(${openServices ? "-45" : "-135"})`}
      />
    </svg>
  );
};

export default ChevronSvg;
