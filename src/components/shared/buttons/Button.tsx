import React from "react";

interface Props {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isDark?: boolean;
  badge?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  text,
  icon,
  iconPosition = "right",
  isDark,
  badge
}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2 w-full ${text === "Post Property" && `px-3 text-black`}  ${
        isDark
          ? " bg-sky-700 hover:bg-sky-600 text-white"
          : "text-sky-700 bg-bg-primary hover:bg-blue-50"
      } font-medium rounded-lg text-xs xl:text-sm py-2 border border-sky-700`}
    >
      {icon && iconPosition === "left" && (
        <span className="icon-left">{icon}</span>
      )}
      {text}
      {badge}
      {icon && iconPosition === "right" && (
        <span className="icon-right">{icon}</span>
      )}
    </button>
  );
};

export default Button;
