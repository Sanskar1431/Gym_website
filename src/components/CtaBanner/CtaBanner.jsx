import MainButton from "../MainButton";

function CtaBanner() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-white">
          <h2 className="text-[3.6rem] font-bold">Ready to train with the elite?</h2>
          <h3 className="text-[2.8rem] font-bold mb-20">
            <span className="text-[#FFD700]">Call our strength coaches:</span> +91 8077883305
          </h3>
          <MainButton
            color={`text-white`}
            bg={`bg-[#FFD700]`}
            text="purchase now"
            arrowColor={`text-white`}
            cN="pricing-cta cta-banner-btn"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
