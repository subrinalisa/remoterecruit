import SubtitleButton from "./CardTitle/SubtitleButton";
import MainTitle from "./CardTitle/MainTitle";
import Description from "./CardTitle/Description";
import profileImage from "@/assets/img/custom-profile.svg";

const CustomProfile = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <SubtitleButton text="Custom Profile" />

              <MainTitle text="Showcase Your Talents" />

              <Description text="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates." />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <img
              src={profileImage}
              alt="RemoteRecruit"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomProfile;
