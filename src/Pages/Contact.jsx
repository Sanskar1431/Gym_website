// Weight Wearhouse Gym Contact Us Page (v3.0).
import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        {/* contact */}
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[3.6rem] font-bold leading-[1.2]">
              We are here for help you! To Shape Your Body.
            </h2>
            <p className="text-[1.6rem] w-[95%] text-[#646464] font-medium my-[40px]">
              At Weight Wearhouse gym, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">
                  B.S.R, UP, India
                </h3>
                <span className="bg-[#FFD700] w-[50px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[1.5rem] font-medium text-[#646464]">
                  Naya Gaon Chandpur Road,
                  <br /> B.S.R UP 203001, India
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Opening Time</h3>
                <span className="bg-[#FFD700] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[1.5rem] font-medium text-[#646464]">
                  <p>Mon to Sat: 4:00 am — 11:00 am</p>
                  <p>Mon to Sat: 4:00 pm — 11:00 pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#FFD700] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[1.5rem] font-medium text-[#646464]">
                  <p>Owner: @therovinthakur</p>
                  <p>+91 8077883305</p>
                  <p>&nbsp; weightwearhousegym@gmail.com</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
                <span className="bg-[#FFD700] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[1.8rem] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#FFD700] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#FFD700] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#FFD700] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#FFD700] ease-in duration-200 hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <form className="flex flex-col p-10 min620:px-6 min620:py-8 bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <div className="relative mb-14">
              <h3 className="text-[2.8rem] font-bold">Leave Us Your Info</h3>
              <span className="bg-[#FFD700] w-[50px] h-[4px] absolute -bottom-4 left-0"></span>
            </div>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[1.4rem] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[1.4rem] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[1.4rem] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Workout</option>
              <option>Cardio</option>
              <option>Meditation</option>
              <option>Cycling</option>
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[1.4rem] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#FFD700] w-fit py-[15px] px-[30px] font-bold text-[1.4rem] uppercase self-center mt-6"
            >
              submit now
            </button>
          </form>
        </div>

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
        <Footer />
      </section>
    </>
  );
}

export default Login;
