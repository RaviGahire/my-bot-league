type AchievementBadgeProps = {
  icon: string;
  title: string;
  desc: string;
  rarity: string;
};

interface NewAchievementBadgeProps {
  badges: AchievementBadgeProps[];
}

export const NewAchievementBadge = ({ badges }: NewAchievementBadgeProps) => {
  return (
   <div>
      <h2 className="font-poppins text-[18px] font-medium pb-18">
        Top Achievements
      </h2>
      <div className="flex justify-center w-fit items-center flex-wrap gap-4">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="relative w-29 h-12 bg-[linear-gradient(0deg,#0162d11e_0%,#8c6cff1b_100%)] border border-indigo-500 rounded-lg flex flex-col justify-center items-center gap-2"
          >
            <div className="absolute bottom-10">
               <img src={badge.icon} alt={`${badge.title}-icon`} />
            </div>
             <p className="font-inter font-semibold text-[12px] leading-0">
              {badge.title}
            </p>
                         <span className="font-inter text-[10px]">
              {badge.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
