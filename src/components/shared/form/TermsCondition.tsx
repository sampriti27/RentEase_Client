interface TermsConditionProps {
  termsAccepted?: boolean;
  onTermsChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TermsCondition: React.FC<TermsConditionProps> = ({
  termsAccepted,
  onTermsChange,
}) => {
  return (
    <div className="flex gap-2 items-center text-xs mt-4">
      <input type="checkbox" checked={termsAccepted} onChange={onTermsChange} />
      <p>
        I agree to the{" "}
        <span className="text-sky-500 cursor-pointer hover:underline underline-offset-2">
          Terms & Conditions
        </span>{" "}
        and{" "}
        <span className="text-sky-500 cursor-pointer hover:underline underline-offset-2">
          Privacy Policy
        </span>{" "}
      </p>
    </div>
  );
};

export default TermsCondition;
