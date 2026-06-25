import { useRef, useEffect } from "react";
// Version 3.2 - Blog recent news and auto scroll layout
import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
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
      <section id="blog" className="bg-white ">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              latest blog
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">Our Recent News</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Weight Wearhouse gym an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>

          {/* blog boxes */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap md1000:overflow-x-auto md1000:pb-6 md1000:px-4 md1000:snap-x md1000:snap-mandatory md1000:flex-nowrap no-scrollbar"
          >
            <BlogBox
              bgClass="box1Bg"
              date="22.03.2026"
              title="Yoga For Everyone: A Beginner's Guide"
              description="Discover how yoga can transform your physical strength and mental clarity. Learn the essential poses, breathing techniques, and alignment tips to start your practice safely."
            />
            <BlogBox
              bgClass="box2Bg"
              date="01.06.2026"
              title="Getting Back Into CrossFit After Vacation"
              description="Taking a break is essential, but returning to high-intensity training requires strategy. Rebuild your work capacity and ease back into your CrossFit routine safely."
            />
            <BlogBox
              bgClass="box3Bg"
              date="28.05.2026"
              title="Meet Fitness Ambassador Gauri"
              description="Read Gauri's inspiring story of transitioning from light cardio workouts to lifting heavy, and why lifting weights is empowering for women."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
