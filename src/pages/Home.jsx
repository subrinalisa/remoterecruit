import { FloatButton } from "antd";

import Banner from "@/components/Banner";
import GlobalReach from "../components/GlobalReach";
import Premium from "../components/Premium";
import CustomProfile from "../components/CustomProfile";
import Subscribe from "../components/Subscribe";
import Faq from "../components/Faq";
import Price from "../components/Price";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <GlobalReach />
      <Premium />
      <CustomProfile />
      <Subscribe />
      <Faq />
      <Price />
      <Footer />
      <FloatButton.BackTop />
    </>
  );
};

export default Home;
