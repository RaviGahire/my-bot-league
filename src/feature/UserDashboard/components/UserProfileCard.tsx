export const UserProfileCard = () => {
  return (
    <div>
      {/* bg-star svg */}
      <div className="relative w-full hidden md:flex justify-center -z-1 ">
        <img
          className="w-25 h-30.25 absolute -top-20 "
          src="/svgs/smallStar.svg"
          alt="star"
        />
      </div>

      {/* main card */}
      <div
        className="lg:w-293.75 h-auto md:h-52 lg:h-85.75 bg-white flex flex-wrap md:flex-row  lg:flex-col  
      justify-between border border-gradient  rounded-xl px-4 py-3 "
      >
        {/* info side */}
        <div className="md:w-1/2 lg:w-auto">
          {/* rank badge */}
          <div className="w-35 flex gap-2 justify-center items-center rounded-[5px] bg-btn-gradient">
            <img
              className=""
              src="/public/svgs/rating-star.svg"
              alt="rating-star"
            />
            <span className="font-semibold font-poppins text-[15px] text-white py-0.5">
               Rank - 1102
            </span>
          </div>
          <div className="flex flex-col gap-6 lg:gap-12 relative top-2 md:top-4 lg:top-13 lg:left-15 ">
            {/* Botleague Id and active status */}
            <div>
              <div className="flex lg:justify-between items-baseline gap-4">
                <p className=" text-[24px] lg:text-[32px] font-semibold font-poppins text-gradient">
                  Avni Chaturvedi
                </p>
                {/* Active badge */}
                 <div>
                    <div className="relative bottom-1 lg:bottom-2 flex justify-center items-center gap-1 px-2 py-0.5 border border-gradient rounded-[10px]">
                      <span className="size-1.5 rounded-full bg-[#0162D1] animate-pulse"></span>{" "}
                      <span className="text-[9px] font-inter tracking-wide text-[#0162D1]">
                        Active
                      </span>
                    </div>
                  </div>
              </div>
              {/* Botleage Id and userName */}
              <p className=" text-[14px] md:text-[18px] font-inter text-gray-800">
             <span className="text-neutral-300">BotLeague ID 123456</span>
              </p>
              <p className="text-[12px] lg:text-[16px] text-gray-800 font-inter">
              @JETT
              </p>
            </div>
            {/* Share and Edit btn */}
            <div className="flex gap-4">
              <button
                
                className="w-25 text-[14px] font-poppins flex justify-center items-center gap-2 px-2.5 py-1.5 bg-custom-gradient text-white rounded-[5px] cursor-pointer"
              >
                <img src="/public/svgs/share.svg" alt="share-icon" />
                Share
              </button>
              <button
           
                className="w-25 text-[14px] font-poppins flex justify-center items-center gap-2 px-2.5 py-1.5 bg-custom-gradient text-white rounded-[5px] cursor-pointer"
              >
                <img src="/public/svgs/edit.svg" alt="edit-icon" />
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* profile img card */}z
        <div className="hidden lg:flex justify-center items-center w-85 ">
          {/* bg-svg  */}
          <div className="w-100 h-82.5 bg-[url('/svgs/profile-bg-svg.svg')] bg-left bg-cover flex items-center justify-center">
            {/* profile-image  */}
            <div className="w-[235px] h-[323px] border-6 border-gradient rounded-[15px] overflow-hidden ml-15">
          <img 
          className="w-full h-full object-cover"
          src="profile.png" alt="profile" />
            </div>
          </div>
        </div>

        {/* Events and Achivements */}
        <div className="md:w-1/2 lg:w-auto">
          <div className="flex justify-center items-center flex-col gap-4 gl:gap-10 pt-10 md:pt-4 lg:pt-10">
            {/* Events */}
            <div
              className="w-62.5 lg:w-86.25 h-8.75 lg:h-13.75 p-0.5   
              bg-gradient-to-r from-blue-500 to-purple-500  
              [clip-path:polygon(0%_0%,_93%_0%,_100%_50%,_93%_100%,_0%_100%,_7%_50%)]"
            >
              <div
                className="w-full h-full flex justify-center items-center gap-4 bg-white
                [clip-path:polygon(0%_0%,_93%_0%,_100%_50%,_93%_100%,_0%_100%,_7%_50%)]"
              >
                {/* Icon */}
                <div className="size-4 lg:size-7">
                  <img
                    className="size-full"
                    src="/public/svgs/calender.svg"
                    alt="calender-icon"
                  />
                </div>

                {/* Text content */}
                <p className="font-sarpanch font-semibold text-[18px] lg:text-[36px] text-black">
                  103
                </p>
                <span className="font-inter text-[12px] lg:text-[18px] font-medium text-gray-700">
                  Events
                </span>
              </div>
            </div>
            {/* Matches */}
            <div
              className="w-62.5 lg:w-86.25 h-8.75 lg:h-13.75 p-0.5   
              bg-gradient-to-r from-blue-500 to-purple-500  
              [clip-path:polygon(0%_0%,_93%_0%,_100%_50%,_93%_100%,_0%_100%,_7%_50%)]"
            >
              <div
                className="w-full h-full flex justify-center items-center gap-4 bg-white
                [clip-path:polygon(0%_0%,_93%_0%,_100%_50%,_93%_100%,_0%_100%,_7%_50%)]"
              >
                {/* Icon */}
                <div className="size-4 lg:size-7">
                  <img
                    className="size-full"
                    src="/public/svgs/swards.svg"
                    alt="calender-icon"
                  />
                </div>

                {/* Text content */}
                <p className="font-sarpanch font-semibold text-[18px] lg:text-[36px] text-black">
             10
                </p>
                <span className="font-inter text-[12px] lg:text-[18px] font-medium text-gray-700">
                  Matches
                </span>
              </div>
            </div>

            {/* Win Rate */}
            <div
              className="w-62.5 lg:w-86.25 h-8.75 lg:h-13.75 p-0.5   
              bg-gradient-to-r from-blue-500 to-purple-500  
              [clip-path:polygon(0%_0%,_93%_0%,_100%_50%,_93%_100%,_0%_100%,_7%_50%)]"
            >
              <div
                className="w-full h-full flex justify-center items-center gap-4 bg-white
                [clip-path:polygon(0%_0%,_93%_0%,_100%_50%,_93%_100%,_0%_100%,_7%_50%)]"
              >
                {/* Icon */}
                <div className="size-4 lg:size-7">
                  <img
                    className="size-full"
                    src="/public/svgs/medal.svg"
                    alt="calender-icon"
                  />
                </div>

                {/* Text content */}
                <p className="font-sarpanch font-semibold text-[18px] lg:text-[36px] text-black">
                         2
                </p>
                <span className="font-inter text-[12px] lg:text-[18px] font-medium text-gray-700">
                  Win Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
