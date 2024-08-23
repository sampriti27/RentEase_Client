import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isDark?: boolean;
  badge?: React.ReactNode;
  page?:string
}

const CrystalButton: React.FC<Props> = ({
  text,
  icon,
  iconPosition = "right",
  isDark,
  badge,
  page
}) => {
    const navigate = useNavigate(); 
    const handleClick = () => {
        if(page){
            navigate(`${page}`)
        }
    }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center
        ${isDark ? `bg-blue-100 hover:bg-blue-200 text-blue-500` 
            : `text-blue-600 hover:bg-blue-100 border border-blue-500`
        }
        font-medium rounded-md px-4 py-2`}
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
