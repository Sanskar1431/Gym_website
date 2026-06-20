import MainButton from "../MainButton";

function ClassesBox({ bgImg, title, trainer, date }) {
  return (
    <>
      <div
        className={`${bgImg} rounded-3xl shadow-2xl flex flex-col h-[46rem] min450:h-[28rem] relative p-[4rem] min450:p-[2rem]`}
      >
        <span className="bg-[#0000004a] rounded-3xl w-full h-full absolute top-0 left-0"></span>

        <div className="flex flex-col align-text-bottom h-full w-full z-[2] justify-end">
          <p className="text-white font-bold text-[2.7rem] min450:text-[1.8rem] mb-3 min450:mb-1">{title}</p>

          <span className="bg-[#FFD700] w-[5rem] h-[4px]"></span>

          <div className="flex gap-6 mb-14 min450:mb-6 mt-6 min450:mt-3 text-[#ffffffe1] text-[1.6rem] min450:text-[1.2rem] font-medium">
            <p>
              <i className="fa-regular fa-user"></i> {trainer}
            </p>
            <p>
              <i className="fa-regular fa-clock"></i> {date}
            </p>
          </div>

          <MainButton
            color={`text-black`}
            bg={`bg-white`}
            text="join now"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default ClassesBox;
