import { useState } from "react";

type FormData = {
  mobileNo: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert("form submited successfully");

    console.log(formData);
  };

  return (
    <>
      {/* User registration form */}
      <div className="relative container mx-auto ">
        {/* background-svgs */}
        <div className="flex justify-around flex-col">
          <div className=" hidden md:flex justify-between ">
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
          <div className="max-w-173 min-h-175 mx-auto rounded-xl  py-2 md:px-10 lg:px-20 border-2 md:border-5 border-blue-700">
            {/* form heading */}
            <div className="text-center pt-5 md:p-0">
              <h2 className="text-[#0162D1] font-semibold font-orbitron text-[24px] md:text-[28px] lg:text-[36px]">
                Create New Account
              </h2>
              <p className="text-[12px] md:text-[16px] lg:text-[20px] font-inter md:font-semibold">
                Start your journey in{" "}
              </p>
            </div>
            {/* form */}
            <form
              onSubmit={handleSubmit}
              action="submit"
              className="py-2 md:py-4 px-2"
            >
              {/* OTP  */}
              <div>
                {/* mobile number */}
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center px-4 md:px-0">
                  <div className="relative w-full md:w-88 ">
                    {/* Phone number */}
                    <input
                      className="p-2.5 md:py-4 md:pr-2 md:pl-5 font-inter w-full  text-[#999797] text-[14px] md:text-[16px] rounded-xl border border-[#BDBDBD] 
                      focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] 
                      transition-shadow duration-150 ease-in"
                      type="text"
                      placeholder="Mobile No"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                    />
                    {/* Error */}
                    {/* <div className="absolute font-poppins text-[10px] md:text-[12px] text-red-500">
                      Invalid mobile number
                    </div> */}
                  </div>
                  {/* get OTP btn */}
                  <button
                    type="button"
                    onClick={() => {
                      alert("hello");
                    }}
                    className="bg-custom-gradient w-full md:w-fit text-white tracking-wide text-[14px] md:text-[16px] font-poppins font-semibold 
                    rounded-xl p-2.5 md:px-4 md:py-4 cursor-pointer transition-transform duration-150 active:scale-95"
                  >
                    Get OTP
                  </button>
                </div>
                {/* Enter OTP  */}
                <div className="flex justify-center items-center gap-6 md:gap-8 my-5">
                  <input
                    type="text"
                    maxLength={1}
                    className=" p-4 w-11.25 h-11.25 md:pr-2 md:pl-5 md:my-4 font-inter md:w-13.75 md:h-14 text-[#999797] rounded-md border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] transition-shadow duration-150 ease-in"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className=" p-4 w-11.25 h-11.25 md:pr-2 md:pl-5 md:my-4 font-inter md:w-13.75 md:h-14 text-[#999797] rounded-md border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] transition-shadow duration-150 ease-in"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" p-4 w-11.25 h-11.25 md:pr-2 md:pl-5 md:my-4 font-inter md:w-13.75 md:h-14 text-[#999797] rounded-md border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] transition-shadow duration-150 ease-in"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" p-4 w-11.25 h-11.25 md:pr-2 md:pl-5 md:my-4 font-inter md:w-13.75 md:h-14 text-[#999797] rounded-md border border-[#BDBDBD] focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] transition-shadow duration-150 ease-in"
                  />
                </div>
                {/* btns */}
                <div className="flex justify-between px-15 md:px-4 md:pb-4">
                  <button
                    type="button"
                    className="text-[#8C6CFF] text-[12px] md:text-[14px] font-inter cursor-pointer "
                  >
                    Resend in 0:03
                  </button>
                  <button
                    type="button"
                    className="text-[12px] md:text-[14px] font-semibold font-inter cursor-pointer pr-4"
                  >
                    Verify
                  </button>
                </div>
              </div>
              {/* password and confirm password */}
              <div className="relative mx-auto md:flex justify-center flex-col items-center">
                <div className="py-4 px-4">
                  <input
                    className="p-2.5 md:py-4 md:pr-2 md:pl-5 font-inter w-full md:w-116.5 text-[#999797] text-[14px] md:text-[16px] rounded-xl border border-[#BDBDBD] 
                      focus:outline-none focus:border-[#BDBDBD] inset-shadow-sm inset-shadow-[#BDBDBD] focus:inset-shadow-none bg-[#bdbdbd2b] 
                      transition-shadow duration-150 ease-in"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
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
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {/* error */}
                  {/* <div className="absolute font-poppins text-[10px] md:text-[12px] text-red-500">
                    Password not matched
                  </div> */}
                </div>
                {/* password warning */}
                <div className="text-start pl-4 pb-1.5 md:pr-20">
                  <p className="text-[#8C6CFF] text-[10px] md:text-[14px] font-inter">
                    <span>*</span>Use at least 8 characters, including a number
                    and a symbol
                  </p>
                </div>

                {/* check box */}
                <div className="relative flex justify-center items-center md:py-4 px-4">
                  {/* checkbox */}
                  <input
                    className="cursor-pointer md:size-5 mb-4"
                    type="checkbox"
                    name="checkBox"
                  />

                  {/* Terms and privacy */}
                  <p className="text-[10px] md:text-[14px]  text-center">
                    By deploying your profile, you agree to the{" "}
                    <span className="text-[#0162D1]">Terms of Engagement </span>
                    and <span className="text-[#0162D1]">Privacy Protocol</span>
                  </p>
                  {/* error */}
                  {/* <div className=" left-0 absolute -bottom-4 md:bottom-0 text-start font-poppins text-[10px] md:text-[12px] text-red-500">
                    Please select terms and conditions
                  </div> */}
                </div>
              </div>
              {/* submit btn */}
              <div className="pt-5 px-4">
                <button
                  type="submit"
                  className="shadow-xs text-white tracking-wide cursor-pointer text-[14px] md:text-[18px] w-full bg-custom-gradient 
                  px-1.5 py-2.5 md:py-4 md:px-2 font-poppins font-semibold rounded-xl hove:bg-cust transition-transform duration-150 active:scale-95"
                >
                  Create account
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
            {/* google and facebook login btn  */}
            <div className="flex gap-2 justify-between items-center px-4 ">
              <button
                className="cursor-pointer text-[14px] md:text-inherit grow flex justify-center items-center 
              gap-2 px-2 py-2  bg-[#D5D5D5] hover:bg-[#d5d5d582] transition-colors 
              duration-150 ease-out rounded-xl active:scale-95"
              >
                Login with{" "}
                <img
                  className="size-5 md:size-10"
                  src="/icons/google-logo.svg"
                  alt="google-icon"
                />{" "}
              </button>
              <button
                className="cursor-pointer 
              text-[14px] md:text-inherit
              grow flex justify-center items-center gap-2 px-2 py-2  
              bg-[#D5D5D5] hover:bg-[#d5d5d582] transition-all duration-150 ease-out rounded-xl active:scale-95"
              >
                Login with{" "}
                <img
                  className="size-5 md:size-10"
                  src="/icons/facebook-logo.svg"
                  alt="facebook-icon"
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
