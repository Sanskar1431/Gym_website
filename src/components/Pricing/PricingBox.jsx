import MainButton from "../MainButton";
// Version 3.3 - Pricing card updates

function PricingBox({ img, price, title, currency = "₹", features }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[28rem] md1000:flex-shrink-0 md1000:snap-center bg-white shadow-xl relative">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[2rem] font-bold w-[25rem] text-center py-6 text-[#FFD700] -bottom-[1.8rem] left-0 right-0 mx-auto">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[2rem] pb-[5rem]">
          <div className="flex items-center justify-center font-bold py-[1rem] relative">
            <span className="text-[3rem] text-[#6d6d6d] font-normal self-start mt-2 mr-1">
              {currency}
            </span>
            <span className="text-[5.5rem]">
              {price}
            </span>
            <span className="text-[2.2rem] text-[#6d6d6d] font-normal self-end mb-3 ml-1">
              p/m
            </span>
          </div>
          {/* text */}
          <div className="flex flex-col text-[1.6rem] font-medium text-center gap-8 text-[#646464] ">
            {features.map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}
          </div>

          <MainButton
            color={`!text-white`}
            bg={`bg-[#FFD700]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;
