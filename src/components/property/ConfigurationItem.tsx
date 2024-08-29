import React from "react";

interface Props {
  imgsrc: string;
  title: string;
  content: string | undefined | number;
  subcontent?: string | undefined | number;
}
const ConfigurationItem: React.FC<Props> = ({
  imgsrc,
  title,
  content,
  subcontent,
}) => {
  return (
    <div className="p-2">
      <div className="flex items-start gap-2">
        <img src={imgsrc} alt="configurationIcon" className="w-6" />
        <p className="text-gray-400">{title}</p>
      </div>
      <p className="text-gray-700 font-medium text-[15px] mt-1">{content}</p>
      <span className="text-[14px]">{subcontent}</span>
    </div>
  );
};

export default ConfigurationItem;
