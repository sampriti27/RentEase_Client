import { ThreeDots } from "react-loader-spinner";

interface Props {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isDark?: boolean;
  badge?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isSelected?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  icon,
  iconPosition = "right",
  isDark,
  badge,
  onClick,
  type = "button",
  isSelected = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 w-full ${
        text === "Post Property" && `px-3 text-black`
      } ${
        isDark || isSelected
          ? "bg-sky-700 hover:bg-sky-600 text-white"
          : "text-sky-700 bg-bg-primary hover:bg-blue-50"
      } font-medium rounded-lg text-xs xl:text-sm py-2 border border-sky-700`}
    >
      {loading ? (
        <ThreeDots
          visible={true}
          height="30"
          width="30"
          color="#ffffff"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="icon-left">{icon}</span>
          )}
          {text}
          {badge}
          {icon && iconPosition === "right" && (
            <span className="icon-right">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
