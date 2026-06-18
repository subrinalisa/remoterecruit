import Logo from "./Common/Logo";

const Banner = () => {
  return (
    <div className="text-white banner-section min-h-screen">
      {/* Navigation */}
      <header className="flex items-center justify-between px-4 py-5 sm:px-6 md:px-10 lg:px-16">
        <Logo />

        <div className="flex items-center gap-3 sm:gap-6">
          <button className="text-sm font-semibold text-[#F5F7FE] hover:text-cyan-200 transition-colors">
            Sign In
          </button>

          <button className="bg-[#4DA8CCE5] text-[#F5F7FE] text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:bg-white hover:text-[#4DA8CCE5] transition-all">
            Sign Up
          </button>
        </div>
      </header>

      {/* Banner */}
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-24 md:py-32 lg:py-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[53px] font-bold mb-4">
          RemoteRecruit's Difference
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed">
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there’s nothing but you, your talents, and the next step
          in your career.
        </p>
      </section>
    </div>
  );
};

export default Banner;
