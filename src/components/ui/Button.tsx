import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Variant = "gold" | "outline-gold" | "outline-white" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

interface ButtonLinkProps extends Omit<ButtonProps, "onClick" | "type"> {
  to: string;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  gold: "bg-gold text-white hover:bg-gold-light border border-gold",
  "outline-gold":
    "bg-transparent text-gold border border-gold hover:bg-gold hover:text-white",
  "outline-white":
    "bg-transparent text-white border border-white hover:bg-white hover:text-brand",
  ghost:
    "bg-transparent text-brand hover:text-brand-mid border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-xs px-6 py-3",
  lg: "text-sm px-8 py-4",
};

export default function Button({
  variant = "gold",
  size = "md",
  onClick,
  type = "button",
  className = "",
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        inline-flex items-center justify-center
        font-semibold uppercase tracking-widest
        rounded transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  to,
  external = false,
  variant = "gold",
  size = "md",
  className = "",
  children,
}: ButtonLinkProps) {
  const classes = `
    inline-flex items-center justify-center
    font-semibold uppercase tracking-widest
    rounded transition-colors duration-200
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (external) {
    return (
      <motion.a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={to} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
