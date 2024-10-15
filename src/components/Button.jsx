const Button = ({ className, href, onClick, children, px }) => {
  const classes = `button p-4 bg-color-1 rounded-full font-light text-[1rem] relative infline-flex items-center text-white transition-colors justify-center items-center hover:-translate-y-1 transition ease-in-out delay-150 duration-300 hover:transition-all ${
    px || px - 7
  } ${className || ""} `;
  const spanClasses = `relative`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
