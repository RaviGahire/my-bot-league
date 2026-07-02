import { NewTermsSection } from "./NewTermsSection";

// Password section props 
type NewPasswordSectionProps = {
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  disabled: boolean;
};

export const NewPasswordSection = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  disabled
}: NewPasswordSectionProps) => {
  const match = confirmPassword === password;

  return (
    <>
      <div className="relative mx-auto md:flex justify-center flex-col items-center">
        <div className="py-4 px-4">
          <input
            className="p-2.5 md:py-4 md:pr-2 md:pl-5 font-inter w-full md:w-116.5 text-[#999797] text-[14px] md:text-[16px] rounded-xl border border-[#BDBDBD] 
            focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] 
            transition-shadow duration-150 ease-in"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={disabled}
          />
        </div>
        <div className="pb-4 px-4">
          <input
            className="p-2.5 md:py-4 md:pr-2 md:pl-5 font-inter w-full md:w-116.5 text-[#999797] text-[14px] md:text-[16px] rounded-xl border border-[#BDBDBD] 
            focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] 
            transition-shadow duration-150 ease-in"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={disabled}
          />
          {/* error */}
          <div className="absolute font-poppins text-[10px] md:text-[12px] text-red-500">
            {confirmPassword && !match && (
              <p className="cna-field-error">Passwords do not match</p>
            )}

            {confirmPassword && match && (
              <p className="cna-field-success">Passwords match ✔</p>
            )}
          </div>
        </div>
        {/* password warning */}
        <div className="text-start pl-4 pb-1.5 md:pr-20">
          <p className="text-[#8C6CFF] text-[10px] md:text-[14px] font-inter">
            <span>*</span>Use at least 8 characters, including a number and a
            symbol
          </p>
        </div>          
      </div>
    </>
  );
};
