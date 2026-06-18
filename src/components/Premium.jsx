import SubtitleButton from "./CardTitle/SubtitleButton";
import MainTitle from "./CardTitle/MainTitle";
import Description from "./CardTitle/Description";
import PremiumImage from "@/assets/img/premium.svg";

const Premium = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src={PremiumImage}
              alt="RemoteRecruit"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-6">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <SubtitleButton text="Actually Fee Free" />

              <MainTitle text="Fee-Free Forever" />

              <Description text="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
