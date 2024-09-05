import React from "react";
import { Input } from "../shared/form";
import TermsCondition from "../shared/form/TermsCondition";
import Button from "../shared/buttons/Button";

const EnquiryForm: React.FC = () => {
  return (
    <div className="text-gray-600">
      <p className=" font-medium text-md md:text-lg">Send enquiry to Owner</p>
      <form action="" className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-1/2">
          <Input type="string" label="Name" />
          <Input type="email" label="Email" />
        </div>
        <div className="w-full sm:w-1/2">
          <textarea
            placeholder="I am interested in this property"
            className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none text-sm px-3 py-2.5 rounded-[7px] border focus:border-sky-700"
            maxLength={400}
            rows={5}
          ></textarea>
        </div>
      </form>
      <TermsCondition />
      <div className="w-1/2 mt-4">
        <Button text="Send Email" isDark={true} />
      </div>
    </div>
  );
};

export default EnquiryForm;
