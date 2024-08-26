import React from "react";

interface Props {
  imgsrc: string;
  title: string;
  content: string;
  subcontent?: string;
}
const ConfigurationItem: React.FC<Props> = ({
  imgsrc,
  title,
  content,
  subcontent,
}) => {
  return (
    <div className="p-2">
      <div className="flex items-center gap-1">
        <img src={imgsrc} alt="configurationIcon" className="h-7 w-7" />
        <p className="text-gray-400">{title}</p>
      </div>
      <p className="text-gray-800 font-medium">{content}</p>
      <span className="text-sm">{subcontent}</span>
    </div>
  );
};

export default ConfigurationItem;
