type TermsSectionProps = {
  agreed: boolean;
  setAgreed: (value: boolean) => void;
};

export const NewTermsSection = ({ agreed, setAgreed }:TermsSectionProps) => {

  return (
    <div className="relative w-full px-4 md:px-0 md:w-116.5 mx-auto flex justify-center items-center md:py-4 ">
      
        <input
        className="cursor-pointer md:size-5"
        type="checkbox"
        name="checkBox"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
    

      {/* Terms and privacy */}
      <p className="text-[10px] md:text-[14px] text-pretty  text-center">
        By deploying your profile, you agree to the{" "}
        <a href="#" target="_blank" className="text-[#0162D1]">Terms of Engagement </a>
        and <a href="#" target="_blank" className="text-[#0162D1]">Privacy Protocol</a>
      </p>
      {/* error */}
      {/* <div className=" left-0 absolute -bottom-4 md:bottom-0 text-start font-poppins text-[10px] md:text-[12px] text-red-500"></div> */}
    </div>
  );
};
