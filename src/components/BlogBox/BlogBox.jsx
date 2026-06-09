import MainButton from "../MainButton";

function BlogBox({ img, title, date, category, description }) {
  return (
    <>
      <div>
        <img src={img} alt="blog_img" className="w-full h-auto object-cover rounded-xl shadow-md" />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#FFD700] text-[16px]"></i>
          &nbsp; By <b>Admin</b> | {date} | {category}
        </p>
        <h2 className="text-[3rem] font-bold mb-6 hover:text-[#FFD700] transition-colors duration-200 cursor-pointer">{title}</h2>
        <p className="font-medium text-[16px] text-[#646464] mb-12 leading-relaxed">
          {description}
        </p>
        <MainButton
          color={`!text-white`}
          bg={`bg-[#FFD700]`}
          text="read more"
          arrowColor={`!text-white`}
          cN="pricing-cta blog-cta"
          goTo="/contact"
        />
      </div>
    </>
  );
}

export default BlogBox;
