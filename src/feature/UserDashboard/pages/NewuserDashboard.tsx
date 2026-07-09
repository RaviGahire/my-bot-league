import { NewTeamCard } from "../components/NewTeamCard"
import { UserProfileCard } from "../components/UserProfileCard"


export const NewuserDashboard = () => {
  return (
       <section aria-label="user-dashboard-section">
      <div className="relative min-h-[120vh] w-full overflow-hidden">
        {/* Top BG Lines */}
        <div className="hidden md:block absolute top-0 left-21 h-[40vh] lg:w-360 lg:h-93 pointer-events-none z-0">
          <img
            className="w-full h-full object-cover object-top"
            src="/svgs/my-dashboard-bg--lines.svg"
            alt="Top background lines"
          />
        </div>

        {/*Bottom BG Lines */}
        <div className="hidden md:block absolute -bottom-20 left-20 h-[30vh] lg:h-[40vh] pointer-events-none z-0">
          <img
            className="w-full h-full object-cover object-bottom"
            src="/svgs/my-dashboard-bottom-bg-line.svg"
            alt="Bottom background lines"
          />
        </div>

        {/*dashboard  */}
        <div className="relative mx-auto max-w-7xl z-10 px-4 lg:px-0 md:pl-24 lg:pl-27">
          {/* main content */}
          <div className="pt-8">
            {/* heading chat btn */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className=" font-semibold text-[22px] md:text-[25px] lg:text-[38px] text-[#0162D1] font-sarpanch">
                  Welcome back, Jett!
                </h2>
              </div>
              {/* chat btn */}
              <div className="lg:pt-5">
                <button className="px-6 py-1 cursor-pointer bg-btn-gradient text-white text-base font-medium rounded-lg">
                  Chats
                </button>
              </div>
            </div>

            {/* Profile component */}
            <div className="pt-4 lg:pt-6">
              <UserProfileCard />
            </div>

{/* Team card */}
            <div>
              <NewTeamCard
               logo={'/public/profile.png'}
              name={'Blackrockx12'}
              status="NA"
              isCurrent={true}
              role="NA"
              />
                         
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
