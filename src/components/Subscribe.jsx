import SubtitleButton from "./CardTitle/SubtitleButton";
import MainTitle from "./CardTitle/MainTitle";
import Description from "./CardTitle/Description";
import Img from "@/assets/img/find-work.svg";

const Subscribe = () => {
  return (
    <section className="subscribe-section py-16 md:py-24 lg:py-32">
      <div className="px-4 sm:px-6 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Card 1 */}
          <div className="lg:col-span-6 order-0">
            <div className="border-2 border-white p-2 rounded-2xl md:rounded-tr-[40px] bg-white">
              <img
                src={Img}
                className="w-full h-auto rounded-xl"
                alt="RemoteRecruit"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-6 order-1">
            <h3>Are you ready?</h3>
            <MainTitle text="Help is only a few clicks away!" />
            <Description text="Click Below to get set up super quickly and find help now!" />

            <button
              type="button"
              className="mt-9 group flex items-center justify-center  gap-4 pl-2 pr-6 py-2 bg-[#dbe2f9] hover:bg-[#d0d9f7] text-[#1e3a8a] font-semibold text-base md:text-lg rounded-full shadow-sm transition-all duration-200 ease-in-out transform active:scale-95"
            >
              {/* Arrow Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#42a5f5] to-[#26c6da] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
