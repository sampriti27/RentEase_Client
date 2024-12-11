import React from "react";
interface Props {
  type: string;
}
const TenantTypeBadge: React.FC<Props> = ({ type }) => {
  return (
    <span
      className={`${
        type === "all"
          ? "bg-sky-100 text-sky-700 border-sky-400"
          : type === "Bachelor"
          ? "bg-yellow-100 text-yellow-700 border-yellow-400"
          : "bg-green-100 text-green-700 border-green-400"
      } text-xs font-medium me-2 px-2.5 py-0.5 rounded`}
    >
      {type === "all" ? "Family / Bachelor" : type}
    </span>
  );
};

export default TenantTypeBadge;
