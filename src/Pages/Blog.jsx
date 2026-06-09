import BlogBox from "../components/BlogBox/BlogBox";
import Footer from "../components/Footer/Footer";
import Img1 from "../images/blogpage/1.jpg";
import Img2 from "../images/blogpage/2.jpg";
import Img3 from "../images/blogpage/3.jpg";
import Img4 from "../images/blogpage/4.jpg";
import Img5 from "../images/blogpage/5.jpg";
import Img6 from "../images/blogpage/6.jpg";
import Img7 from "../images/blogpage/7.jpg";
import Recent1 from "../images/blogpage/recent1.jpg";
import Recent2 from "../images/blogpage/recent2.jpg";
import Recent3 from "../images/blogpage/recent3.jpg";
import Recent4 from "../images/blogpage/recent4.jpg";
import Recent6 from "../images/blogpage/recent6.jpg";

function Blog() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        {/* blog */}
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28">
            <BlogBox
              img={Img1}
              title="Yoga For Everyone: A Beginner's Guide to Mindfulness"
              date="March 22, 2026"
              category="Yoga"
              description="Discover how yoga can transform your physical strength and mental clarity. Learn the essential poses, breathing techniques, and alignment tips to start your practice safely and effectively today."
            />
            <BlogBox
              img={Img2}
              title="Getting Back Into CrossFit After Vacation: 5 Tips to Restart Safely"
              date="June 1, 2026"
              category="CrossFit"
              description="Taking a break is essential, but returning to high-intensity training requires strategy. Rebuild your work capacity, prioritize joint mobility, and ease back into your CrossFit routine without risking injury."
            />
            <BlogBox
              img={Img3}
              title="Meet Fitness Ambassador Gauri: My Journey to Powerlifting"
              date="May 28, 2026"
              category="Body Building"
              description="Read Gauri's inspiring story of transitioning from light cardio workouts to lifting heavy. She shares how she overcame gym intimidation and explains why lifting weights is empowering for women."
            />
            <BlogBox
              img={Img4}
              title="The Science of Meditation: How Mindfulness Enhances Athletic Recovery"
              date="May 15, 2026"
              category="Meditation"
              description="Elite physical performance is as much mental as it is physical. Explore how meditation lowers cortisol levels, speeds up muscle repair, improves sleep quality, and keeps you focused under pressure."
            />
            <BlogBox
              img={Img5}
              title="Fueling Peak Performance: Pre- and Post-Workout Nutrition Guide"
              date="April 10, 2026"
              category="Fitness"
              description="What you eat before and after a workout determines your success. Get our expert nutritionists' recommendations for optimal macro ratios to boost stamina and accelerate muscle synthesis."
            />
            <BlogBox
              img={Img6}
              title="Beat the Heat: High-Intensity Workouts to Keep You Fit All Summer"
              date="April 25, 2026"
              category="Fitness"
              description="Keep your training momentum going with our summer-proof HIIT circuit routines. These short, high-intensity workouts are designed to maximize calorie burn and maintain lean muscle in hot weather."
            />
            <BlogBox
              img={Img7}
              title="The Weight Wearhouse 30-Day Strength Challenge: Are You Ready?"
              date="June 8, 2026"
              category="Body Building"
              description="Push your limits with our upcoming community strength challenge. Access daily custom workouts, participate in group training sessions, and compete for incredible fitness rewards."
            />
          </div>

          {/* sidebar */}
          <div>
            {/* form */}
            <form className="flex">
              <input
                className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                type="search"
                placeholder="Search..."
              ></input>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass bg-[#FFD700] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
              </button>
            </form>

            {/* categories */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Categories
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#FFD700]"></span>
              <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#FFD700] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Body Building
                  </p>
                  <span>(4)</span>
                </li>



                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#FFD700] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Crossfit
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#FFD700] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Fitness
                  </p>
                  <span>(4)</span>
                </li>

                <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#FFD700] ease-in duration-200">
                  <p>
                    <i className="text-[13px] fa-solid fa-chevron-right"></i>
                    &nbsp; Meditation
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#FFD700] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Yoga
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>
            {/* recent posts */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Recent Posts
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#FFD700] mb-7"></span>
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent1} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2026
                    </p>
                    <p className="text-[16px] text-black hover:text-[#FFD700] ease-in duration-200 cursor-pointer font-bold">
                      Yoga For Everyone: A Beginner's Guide
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent2} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      June 1, 2026
                    </p>
                    <p className="text-[16px] text-black hover:text-[#FFD700] ease-in duration-200 cursor-pointer font-bold">
                      Getting Back Into CrossFit
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent3} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 28, 2026
                    </p>
                    <p className="text-[16px] text-black hover:text-[#FFD700] ease-in duration-200 cursor-pointer font-bold">
                      Meet Fitness Ambassador Gauri
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent4} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 15, 2026
                    </p>
                    <p className="text-[16px] text-black hover:text-[#FFD700] ease-in duration-200 cursor-pointer font-bold">
                      The Science of Meditation
                    </p>
                  </div>
                </div>

                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent6} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      April 25, 2026
                    </p>
                    <p className="text-[16px] text-black hover:text-[#FFD700] ease-in duration-200 cursor-pointer font-bold">
                      Beat the Heat: Summer Workouts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* popular tags */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Popular Tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#FFD700] mb-7"></span>
              <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Crossfit
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Fitness
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Gym
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Meditation
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Running
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Workout
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#FFD700] ease-in duration-200 cursor-pointer">
                  #Yoga
                </p>

              </div>
            </div>
            {/* banner */}
            <div className="blog-banner w-full h-[56rem] relative">
              <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
                Weight Wearhouse gym
              </p>
              <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[36rem] h-[60px]"></span>
              <div className="text-white flex flex-col absolute top-[10rem] left-10">
                <p className="text-[64px] font-bold">34%</p>
                <p className="text-[20px] font-bold -mt-[10px]">
                  Flat Discount
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Blog;
