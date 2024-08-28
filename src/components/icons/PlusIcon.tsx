interface PlusIconProps {
  isFilter?: boolean;
}

const PlusIcon:React.FC<PlusIconProps> = ({isFilter}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={`${isFilter ? `1.5` : `2.5`}`}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export default PlusIcon;
