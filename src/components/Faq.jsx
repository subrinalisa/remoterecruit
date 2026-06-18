import MainTitle from "./CardTitle/MainTitle";
import TransparentButton from "./TransparentButton";

const questions = [
  {
    title: "Do I have to sign a long-term contract?",
    des: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
  {
    title: "Can I pay for a whole year?",
    des: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
  {
    title: "What if I need help?",
    des: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
];

const Faq = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 md:mb-14">
            <MainTitle text="Common Questions" />
          </div>

          {questions.map((item, index) => (
            <div
              key={index}
              className="mb-8 md:mb-10 pb-8 border-b border-slate-200 last:border-0"
            >
              <h3 className="font-semibold text-lg md:text-xl text-[#11142D] mb-3">
                {item.title}
              </h3>

              <p className="text-base md:text-lg text-[#6D6E7A] leading-relaxed">
                {item.des}
              </p>
            </div>
          ))}

          <div className="mt-8 md:mt-12">
            <TransparentButton text="More Questions" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
