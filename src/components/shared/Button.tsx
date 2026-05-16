interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
}

const variants = {
  primary: "btn-primary",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: Props) {
  return (
    <button className={`btn ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
