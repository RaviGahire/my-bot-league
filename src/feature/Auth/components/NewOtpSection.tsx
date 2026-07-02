import { useRef } from "react";

const OTP_LENGTH = 4;

type OTPSectionProps = {
  mobile: string;
  setMobile: (value: string) => void;
  otp: string[];
  setOtp: (value: string[]) => void;
  otpSent: boolean;
  otpVerified: boolean;
  resendTimer: number;
  isLoading: boolean;

  onSendOtp: () => void;
  onResendOtp: () => void;
  onVerifyOtp: () => void;
};

export const NewOtpSection = ({
  mobile,
  otp,
  otpSent,
  otpVerified,
  resendTimer,
  isLoading,
  setMobile,
  setOtp,
  onSendOtp,
  onResendOtp,
  onVerifyOtp,
}: OTPSectionProps) => {
  // OTP Ref for get otp from the input's
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle OTP Function
  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div>
      {/* mobile number */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center px-4 md:px-0">
        <div className="relative w-full md:w-88 ">
          {/* Phone number */}
          <input
            className="p-2.5 md:py-4 md:pr-2 md:pl-5 font-inter w-full  text-[#999797] text-[14px] md:text-[16px] rounded-xl border border-[#BDBDBD] 
            focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] 
            transition-shadow duration-150 ease-in"
            type="tel"
            placeholder="Mobile No"
            name={mobile}
            onChange={(e) =>
              setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            disabled={otpVerified}
          />
          {/* Error */}
          {/* <div className="absolute font-poppins text-[10px] md:text-[12px] text-red-500">
                      Invalid mobile number
                    </div> */}
        </div>
        {/* send OTP btn */}
        <button
          type="button"
          onClick={otpSent ? onResendOtp : onSendOtp}
          className="bg-custom-gradient w-full md:w-fit text-white tracking-wide text-[14px] md:text-[16px] font-poppins font-semibold 
                    rounded-xl p-2.5 md:px-4 md:py-4 cursor-pointer transition-transform duration-150 active:scale-95"
        >
          {otpSent && resendTimer > 0
            ? `Resend in &{resendTimer}s`
            : otpSent
              ? "Resend OTP"
              : "Get OTP"}
        </button>
      </div>
      {/* Enter OTP  */}
      <div className="flex justify-center items-center gap-6 md:gap-8 ">
        {otp.map((digit: string, index: number) => (
          <input
            className=" p-4 w-11.25 h-11.25 md:pr-2 md:pl-5 md:my-4 font-inter md:w-13.75 md:h-14 text-[#999797] 
            rounded-md border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm 
            inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] transition-shadow duration-150 ease-in"
            key={index}
            ref={(el) => {
              otpRefs.current[index] = el;
            }}
            value={digit}
            maxLength={1}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            disabled={!otpSent || otpVerified}
            inputMode="numeric"
            autoComplete="off"
          />
        ))}
      </div>
      {/* btns */}
      <div className="flex justify-between px-4 md:pl-14 md:pb-3">
        <button
          type="button"
          className="text-[#8C6CFF] text-[12px] md:text-[14px] font-inter cursor-pointer "
          onClick={onVerifyOtp}
          disabled={isLoading || !otpSent || otpVerified}
        ></button>
        <button
          type="button"
          className="text-[12px] md:text-[14px] font-semibold font-inter cursor-pointer pr-4"
        >
          {otpVerified ? (
            <span className="text-green-500">Verified ✔</span>
          ) : (
            <span className=" hover:text-[#5385ed] transition-colors duration-150 ease-in-out ">
              Verify
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
