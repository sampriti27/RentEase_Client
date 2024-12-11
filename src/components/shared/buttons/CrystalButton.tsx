import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isDark?: boolean;
  badge?: React.ReactNode;
  page?: string;
  color?: "sky" | "blue" | "orange" | "red"; // Add 'red' color option
}

const CrystalButton: React.FC<Props> = ({
  text,
  icon,
  iconPosition = "right",
  badge,
  page,
  color = "blue", // Default color if none is provided
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (page) {
      navigate(`${page}`);
    }
  };

  // Determine color theme classes based on the color prop
  const getColorClasses = () => {
    switch (color) {
      case "sky":
        return "bg-sky-100 hover:bg-sky-200 text-sky-500";
      case "orange":
        return "bg-orange-100 hover:bg-orange-200 text-orange-500";
      case "red":
        return "bg-red-100 hover:bg-red-200 text-red-500";
      case "blue":
      default:
        return "bg-blue-100 hover:bg-blue-200 text-blue-500";
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-sm sm:text-base flex items-center ${getColorClasses()} font-medium rounded-md px-4 py-2`}
    >
      {icon && iconPosition === "left" && (
        <span className="icon-left">{icon}</span>
      )}
      {text}
      {badge}
      {icon && iconPosition === "right" && (
        <span className="icon-right ml-2">{icon}</span>
      )}
    </button>
  );
};

export default CrystalButton;
