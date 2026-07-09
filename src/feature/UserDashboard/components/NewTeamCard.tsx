import { NewAchievementBadge } from "./NewAchievementBadge";

type TeamCardProps = {
  name: string;
  role: string;
  status?: string;
  logo?: string | null;
  isCurrent?: boolean;
  onClick?: () => void;
};

const userBadges = [
  {
    icon: "/public/team-logo.png",
    title: "Gold Medal",
    desc: "Match",
    rarity: "Legendary",
  },
  {
    icon: "/public/team-logo.png",
    title: "MVP",
    desc: "Tournament",
    rarity: "Epic",
  },
];
export const NewTeamCard = ({
  name,
  role,
  status,
  logo,
  isCurrent,
  onClick,
}: TeamCardProps) => {
  return (
    <>
      <div className="pt-5" aria-label="team-info-card">
        <div className="flex flex-col lg:flex-row flex-wrap gap-5 lg:items-center border border-gradient rounded-[15px] p-4">
          {/* Team Logo */}
          <div className="w-full h-40 lg:w-[288px] lg:h-54 border-4 border-gradient rounded-xl overflow-hidden  ">
            {logo ? (
              <img className="size-full object-fit " src={logo} alt={name} />
            ) : (
              <div className="size-full flex justify-center items-center">
                <p className="text-sm font-poppins tracking-wide text-gray-400">
                  Team logo unavailable
                </p>
              </div>
            )}
          </div>
          {/* team info */}
          <div className=" lg:pl-15">
            <p className="flex items-center gap-1 font-poppins text-[14px] lg:text-[18px] leading-0 pb-2.25">
              {isCurrent ? "Current Team" : "Unavailable"}
              <span className="size-2 bg-gradient-end animate-ping rounded-full"></span>
            </p>
            {/* TeamName */}
            <p className=" text-[18px] lg:text-[26px]  text-gradient font-sarpanch font-semibold">
              {name ? name : "Unavailable"}
            </p>
            <span className="text-[14px] lg:text-base font-inter text-gray-500">
              4 members
            </span>
            <div className="pt-5">
              <button className="px-4 py-2 text-white bg-custom-gradient rounded-[5px] font-poppins capitalize">
                edit team
              </button>
            </div>
            {/* star */}
            <div className="relative">
              <img
                className="absolute size-19.25 left-42 -bottom-10"
                src="/public/svgs/smallStar.svg"
                alt="start"
              />
            </div>
          </div>
          {/* devider */}
          <div className=" w-full lg:w-auto lg:h-54 lg:ml-23.5 mr-16.75 border border-gradient" />
          {/* Achievements */}
          <NewAchievementBadge badges={userBadges} />
        </div>
      </div>
      <div className="relative">
        {/* star */}
        <div className="absolute -right-42 -top-70">
          <img
            className="size-20 lg:size-40"
            src="/public/svgs/smallStar.svg"
            alt="star"
          />
        </div>
      </div>
      {/* empty container */}
      <div className="pt-5">
        <div className="bg-purple-700 h-30 lg:h-60 lg:w-293.5 rounded-[15px]"></div>
      </div>
      {/* plan svg */}
      <div className="flex justify-center items-center">
        <div className="hidden lg:block lg:w-63.25 h-5.75 ">
          <img
            className="size-full relative lg:bottom-15 transform rotate-25 "
            src="/public/svgs/plane-svg.svg"
            alt="plane"
          />
        </div>
      </div>
    </>
  );
};
