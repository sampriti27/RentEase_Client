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
      <div className="flex items-start gap-2">
        <img src={imgsrc} alt="configurationIcon" className="w-6" />
        <p className="text-gray-400 text-[15px] md:text-[17px] ">{title}</p>
      </div>
      <p className="text-gray-700 font-medium text-[13px] md:text-[15px] mt-1">{content}</p>
      <span className="text-[13px]">{subcontent}</span>
    </div>
  );
};

export default ConfigurationItem;
