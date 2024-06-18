const Button = ({ className, href, onClick, children, px }) => {
  const classes = `button relative infline-flex items-center transition-colors justify-center hover:text-color-8 ${
    px || px - 7
  } ${className || ""} `;
  const spanClasses = `relative z-10`;
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
