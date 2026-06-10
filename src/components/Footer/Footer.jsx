// Weight Wearhouse Gym Footer Component
import FooterLogo from "../../images/logo/Logo.jpg";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[8rem] h-[8rem] rounded-full object-cover" />
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#FFD700] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#FFD700] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#FFD700] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#FFD700] hover:text-white"
                ></i>
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © 2023 Weight Wearhouse gym
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#FFD700]"></span>

              <p className="text-[16px] hover:text-[#FFD700] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-[#FFD700] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#FFD700] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#FFD700] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#FFD700] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Opening Time</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#FFD700]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Saturday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                4:00am - 11:00am (Morning)
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                4:00pm - 11:00pm (Night)
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
