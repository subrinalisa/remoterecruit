import SubtitleButton from "./CardTitle/SubtitleButton";
import MainTitle from "./CardTitle/MainTitle";
import Description from "./CardTitle/Description";
import GlobalImage from "@/assets/img/global-reach.svg";

const GlobalReach = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="max-w-xl">
              <SubtitleButton text="Global Reach" />

              <MainTitle text="The First Fully Global Job Board, Anywhere, Ever" />

              <Description text="RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be." />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <img
              src={GlobalImage}
              alt="RemoteRecruit"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
