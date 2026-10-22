const Card = ({
  children,
  className = "",
  size = "md",
  as: Tag = "div",
  ...rest
}) => {
  const base =
    size === "lg"
      ? "clay-lg"
      : size === "sm"
        ? "clay-sm"
        : size === "inset"
          ? "clay-inset"
          : "clay";

  return (
    <Tag className={`${base} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Card;
