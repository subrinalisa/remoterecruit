import { CircleCheck, X } from "lucide-react";
import MainTitle from "./CardTitle/MainTitle";
import CheckMark from "./Common/CheckMark";
import CrossMark from "./Common/CrossMark";
import TransparentButton from "./TransparentButton";
import LotusImg from "@/assets/img/lotus-icon.svg";

const freeFeatures = [
  {
    title: `1 Active Job`,
    check: true,
  },
  {
    title: `Basic List Placement`,
    check: true,
  },
  {
    title: `Unlimited Job Applicants`,
    check: false,
  },
  {
    title: `Invite Anyone to Apply to Your Jobs`,
    check: false,
  },
];
const premiumFeatures = [
  {
    title: `Unlimited Job Posts`,
    check: true,
  },
  {
    title: `Instant Job Post Approval`,
    check: true,
  },
  {
    title: `Premium List Placement`,
    check: true,
  },
  {
    title: `Unlimited Job Applicants`,
    check: true,
  },
];
const Price = () => {
  return (
    <section>
      <div className="px-8 py-6 md:px-16 mx-auto">
        <div className="text-center">
          <MainTitle text="Help Is One Click Away" middle={true} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Free Basic */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
            <div>
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="bg-[#ECF2FF] px-8 py-6 rounded-2xl w-40 h-40 text-center flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-[32px] text-[#52B4DA]">
                    Free
                  </h3>
                  <p className="font-medium text-lg text-[#11142D65]">Basic</p>
                </div>
                <ul className="space-y-2">
                  {freeFeatures?.map((item, index) => (
                    <li
                      className={`flex gap-x-2 items-center xl:text-base text-xs font-medium ${item?.check ? "text-[#323445]" : "text-[#808191]"} `}
                      key={index}
                    >
                      <span>{item?.check ? <CheckMark /> : <CrossMark />}</span>
                      <span>{item?.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <TransparentButton text="Get Started" fullwidth={true} />
          </div>

          {/* Premium Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
            <div>
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="bg-[#ECF2FF] px-8 py-6 rounded-2xl w-40 h-40 text-center flex flex-col items-center justify-center relative z-0">
                  <h3 className="text-[32px] leading-11.25 font-semibold flex items-center text-center bg-linear-to-br from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent">
                    $79.99
                  </h3>
                  <p className="font-medium text-lg text-[#11142D65]">
                    Per Month
                  </p>
                  <button
                    type="button"
                    className="absolute -top-5 bg-[#C2EEFF] shadow-4xl border border-slate-100 rounded-full px-4 py-2 w-[90%] z-10 flex items-center gap-x-2"
                  >
                    <img
                      src={LotusImg}
                      className="max-w-7"
                      alt="RemoteRecruit"
                    />

                    <span className="text-base text-[#11142D] font-semibold">
                      Premium
                    </span>
                  </button>
                </div>
                <ul className="space-y-2">
                  {premiumFeatures?.map((item, index) => (
                    <li
                      className={`flex gap-x-2 items-center xl:text-base text-xs font-medium ${item?.check ? "text-[#323445]" : "text-[#808191]"} `}
                      key={index}
                    >
                      <span>{item?.check ? <CheckMark /> : <CrossMark />}</span>
                      <span>{item?.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className="
                bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)]
                shadow-2xl
                rounded-2xl
                px-12 py-4 min-w-32
                text-white
                font-semibold text-base
                transition-all
                hover:scale-[1.02]
                w-full
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
