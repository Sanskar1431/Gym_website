import { useRef, useEffect } from "react";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainerBox from "./TrainerBox";

function Trainers() {
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
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div -- */}
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              gym trainers
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[21rem] absolute -top-[6px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Team Of Expert Coaches
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </p>
          </div>

          {/* trainers div -- */}
          <div
            ref={scrollContainerRef}
            className="flex mt-20 md1000:overflow-x-auto md1000:pb-6 md1000:px-4 md1000:snap-x md1000:snap-mandatory no-scrollbar"
          >
            <TrainerBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
