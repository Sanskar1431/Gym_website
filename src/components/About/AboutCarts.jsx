import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[3.5rem] rounded-br-[3.5rem] shadow-2xl min-h-[34rem] w-full card-item-div md1000:min-h-[26rem] md1000:w-[28rem] md1000:flex-shrink-0 md1000:snap-center"
        >
          <img src={card.img} alt="box_img" className=" w-[7.5rem] mb-4" />
          <p className=" text-[2.4rem] font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[1.5rem] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
