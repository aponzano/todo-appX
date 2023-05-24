import classNames from "classnames";

export const Panel = ({children, className, ...rest}) => {
  const finalClassNames = classNames(
    "rounded-md shadow bg-white dark:bg-veryDarkDesaturatedBlue",
    className,
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};
