import { NewOtpSection } from "../components/NewOtpSection";
import { NewPasswordSection } from "../components/NewPasswordSection";
import { NewSocialAuth } from "../components/NewSocialAuth";
import { NewTermsSection } from "../components/NewTermsSection";
import useRegister from "../hooks/useRegister";

export const SignUp = () => {

  //use register hook all methods are declaired in it
  const register = useRegister();

  return (
    <>
      {/* User registration form */}
      <div className="relative container mx-auto ">
        {/* background-svgs */}
        <div className="flex justify-around flex-col">
          <div className="hidden md:flex justify-between ">
            <img
              className="w-99 h-79.5 relative left-25"
              loading="lazy"
              src="/svgs/plane-svg.svg"
              alt="plane"
            />
            <img
              className="absolute size-43 md:right-49"
              loading="lazy"
              src="/svgs/bigStar.svg"
              alt="star"
            />
          </div>
          <div className=" hidden md:flex justify-between">
            <img
              className="size-25 absolute -bottom-125 left-40 "
              loading="lazy"
              src="/svgs/smallStar.svg"
              alt="star"
            />
            <img
              className="absolute w-88 h-53.25 right-28 -bottom-80"
              loading="lazy"
              src="/svgs/drone.svg"
              alt="drone"
            />
          </div>
        </div>

        {/* Main container*/}
        <div className="absolute left-0 right-0 top-5 px-2">
          {/* top-heading */}
          <div>
            <h2 className="text-[18px] sm:text-[24px]  md:text-[45px] font-racing tracking-normal uppercase text-center">
              <span className="underline -underline-offset-15 md:-underline-offset-35 decoration-blue-600 decoration-2 md:decoration-4 ">
                bot
              </span>
              <span className="underline decoration-red-400 decoration-2 md:decoration-4 ml-1">
                league
              </span>
            </h2>
          </div>

          {/*  sing-up form */}
          <div className="max-w-173 min-h-175 mx-auto rounded-xl  py-2 md:px-20 lg:px-20 border-2 md:border-5 border-blue-700">
            {/* form heading */}
            <div className="text-center pt-5 md:p-0">
              <h2 className=" text-[#0162D1] font-semibold font-orbitron text-[24px] md:text-[28px] lg:text-[36px]">
                Create New Account
              </h2>
              <p className="text-[12px] md:text-[16px] lg:text-[20px] font-inter md:font-semibold">
                Start your journey in{" "}
              </p>
            </div>

            {/* form */}
            <form action="submit" className="py-2 md:py-4 px-2">
              {/* Mobile and OTP  */}
              <NewOtpSection
                mobile={register?.mobile}
                setMobile={register.setMobile}
                otp={register.otp}
                setOtp={register.setOtp}
                otpSent={register.otpSent}
                otpVerified={register.otpVerified}
                resendTimer={register.resendTimer}
                isLoading={register.isLoading}
                // IMP OTP Methods
                onSendOtp={register.handleSendOtp}
                onResendOtp={register.handleResendOtp}
                onVerifyOtp={register.handleVerifyOtp}
              />

              {/* password and confirm password */}
              <NewPasswordSection
                password={register.password}
                setPassword={register.setPassword}
                confirmPassword={register.confirmPassword}
                setConfirmPassword={register.setConfirmPassword}
                disabled={!register.otpVerified}
              />

              {/* Terms and privacy protocol */}
              <NewTermsSection
                agreed={register.agreed}
                setAgreed={register.setAgreed}
              />

              {/* Errors */}
              {register.error && (
               <div className="w-fit pl-5">
                 <p className="mx-auto text-red-600 text-[12px]">{register.error}</p>
               </div>
              )}

              {/* Submit Btn */}
              <div className="pt-5 px-4  ">
                <button
                  type="submit"
                  onClick={register.handleRegister}
                  disabled={register.isLoading}
                  className="shadow-xs w-full  text-white tracking-wide cursor-pointer text-[14px] md:text-[18px] bg-custom-gradient 
                  px-1.5 py-2.5 md:py-4 md:px-2 font-poppins font-semibold rounded-xl hove:bg-cust transition-transform duration-150 active:scale-95"
                >
                  {register.isLoading ? "Loading..." : "Create Account"}
                </button>
              </div>
            </form>

            <div>
              <p className="text-[10px] md:text-[14px] font-inter text-center">
                Already have an account?
                <a href="/login" className="text-[#0162D1]">
                  {" "}
                  Login
                </a>
              </p>
              {/* divider */}
              <div className="flex gap-2 items-center justify-center text-[10px] md:text-[14px] py-4 px-4 md:px-0">
                <span className="w-14 md:w-32.5 h-px bg-black" /> OR{" "}
                <span className="w-14 md:w-32.5 h-px bg-black" />
              </div>
            </div>

            {/* Social Auth Btns */}
            <NewSocialAuth googleAauth={""} facebookAuth={""} />
          </div>
        </div>
      </div>
    </>
  );
};
