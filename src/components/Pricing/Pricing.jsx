import { useRef, useEffect } from "react";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

function Pricing() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleAutoScroll = () => {
      if (window.innerWidth > 1000) return;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(handleAutoScroll, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              PRICING CHART
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Weight Wearhouse gym an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-10 mt-32 relative z-[2] md1000:overflow-x-auto md1000:pb-6 md1000:px-4 md1000:snap-x md1000:snap-mandatory no-scrollbar"
          >
            <PricingBox
              img={Img1}
              price="1800"
              title="Beginners"
              features={["Free Hand", "Gym Fitness", "Weight Loss", "Personal Trainer", "Cycling"]}
            />
            <PricingBox
              img={Img2}
              price="1200"
              title="Intermediate"
              features={["Free Hand", "Gym Fitness", "Weight Loss", "Self Train (No Trainer)", "Cycling"]}
            />
            <PricingBox
              img={Img3}
              price="2000"
              title="Advance"
              features={["Free Hand", "Gym Fitness", "Weight Loss", "Personal Trainer", "Prepare for Competition"]}
            />
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
