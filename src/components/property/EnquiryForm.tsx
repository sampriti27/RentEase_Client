import React, { useState } from "react";
import { Input } from "../shared/form";
import TermsCondition from "../shared/form/TermsCondition";
import Button from "../shared/buttons/Button";
import { useMutation } from "react-query";
import { enqueueSnackbar } from "notistack";
import { PropertyDetails } from "../../types";
import { sendEnquiry } from "../../http";

interface ClientDetails {
  name : string | undefined,
  email : string | undefined,
  message : string | undefined
}
interface Props {
  propertyId: string | undefined;
}

export interface ReqProps {
  clientDetails : ClientDetails
}

const EnquiryForm: React.FC<Props> = ({ propertyId }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMessage] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const sendMutation = useMutation({
    mutationFn: (data: ReqProps) => {
      console.log(data);
      return sendEnquiry(data, propertyId);
    },

    onSuccess: () => {
      enqueueSnackbar("Enquiry sent successfully!", {
        variant: "success",
      });
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.response.data.message, {
        variant: "error",
      });
    },
  });

  const handleSendEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const reqObj:ReqProps = {
      clientDetails: {
        name: name,
        email: email,
        message: msg
      }
    };
    if(!termsAccepted) {
      enqueueSnackbar("Please accept terms & conditions and privacy policy!", {
        variant : "warning"
      })
      return;
    }
    sendMutation.mutate(reqObj);
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="text-gray-600">
      <p className=" font-medium text-md md:text-lg">Send enquiry to Owner</p>
      <form action="" className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-1/2">
          <Input type="string" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="w-full sm:w-1/2">
          <textarea
            value={msg}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="I am interested in this property"
            className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none text-sm px-3 py-2.5 rounded-[7px] border focus:border-sky-700"
            maxLength={400}
            rows={5}
          ></textarea>
        </div>
      </form>
      <TermsCondition termsAccepted={termsAccepted}
              onTermsChange={handleTermsChange} />
      <div className="w-1/2 mt-4" onClick={handleSendEnquiry}>
        <Button text="Send Email" isDark={true} />
      </div>
    </div>
  );
};

export default EnquiryForm;
