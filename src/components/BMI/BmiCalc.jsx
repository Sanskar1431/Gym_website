import { useState } from "react";

function BmiCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <>
      <section className="bmi-section py-[6rem] relative">
        <div className="container page-padding ">
          <span className="w-full h-full absolute bg-transparent min620:bg-[#00000063] top-0 left-0"></span>
          <div className="text-white w-[52rem] min620:w-[100%] relative">
            <h2 className="text-[4rem] font-bold leading-[1.1] mb-8">
              Let's Calculate Your <span className="text-[#FFD700]">BMI</span>
            </h2>
            <p className="text-[1.6rem] text-[#a1a1a1] min620:text-white">
              Easily track your body composition metrics to optimize your metabolic and athletic training splits.
            </p>
            <div className="flex flex-col">
              <form className="flex w-full gap-6 h-[50px] min450:h-auto min450:flex-col mt-10">
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-[50%] min450:w-full h-full min450:h-[50px] bg-transparent text-[1.4rem] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="Weight / kg"
                ></input>
                <input
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-[50%] min450:w-full h-full min450:h-[50px] bg-transparent text-[1.4rem] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="Height / cm"
                ></input>
              </form>
              {/* output */}
              <p className="mt-10 gap-3 text-[1.6rem] font-medium flex items-center w-full min450:flex-col min450:items-start min450:gap-2">
                <span className="w-1/2 min450:w-full">
                  Your BMI is: &nbsp;
                  <span className="text-[#FFD700]">{bmi}</span>
                </span>
                <span className="w-1/2 min450:w-full">
                  Your weight is: &nbsp;
                  <span className="text-[#FFD700]">{message}</span>
                </span>
              </p>
              <button
                onClick={calcBmi}
                style={{ transition: "all 0.3s" }}
                type="submit"
                className="text-[1.5rem] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FFD700]"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BmiCalc;
