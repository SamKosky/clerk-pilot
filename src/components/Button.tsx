import Link, { type LinkProps } from "next/link";

interface Props extends LinkProps {
  label: string;
  primary?: boolean;
}

const Button = ({ primary = true, label, ...props }: Props) => {
  return (
    <Link
      className={`rounded-xl px-4 py-2 text-lg font-normal ${
        primary ? "bg-black text-white" : "text-black underline"
      }`}
      {...props}
    >
      {label}
    </Link>
  );
};

export default Button;
