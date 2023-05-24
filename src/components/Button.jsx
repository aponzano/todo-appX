import className from "classnames";

export const Button = ({children, isActive, ...rest}) => {
  const classes = className(rest.className, "dark:text-darkGrayishBlue-dark text-darkGrayishBlue", {
    "text-brightBlue": isActive,
    "md:hover:text-VeryDarkGrayishBlue md:hover:dark:text-lightGrayishBlue-dark": !isActive,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
