import SocialAuth from "./SocialAuth";

type SocialAuth = {
  googleAauth: unknown;
  facebookAuth: unknown;
};

export const NewSocialAuth = ({ googleAauth, facebookAuth }: SocialAuth) => {
  return (
    <div className="flex gap-2 justify-between items-center px-5  ">
      {/* login with google */}
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
      {/* login with facebook */}
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
  );
};
