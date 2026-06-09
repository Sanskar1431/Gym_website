import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
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
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
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
