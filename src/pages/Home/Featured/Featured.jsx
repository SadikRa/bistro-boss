import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mb-12 pt-8">
      <SectionTitle
        subHeading="Check it Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
      <div>
        <img src={featuredImg} alt="" />
      </div>
      <div className="md:ml-8">
        <p>March 20, 2023</p>
        <p>WHERE CAN I GET SOME?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptate facere, deserunt dolores maiores quod nobis quas quasi.
          Eaque repellat recusandae ad laudantium tempore consequatur
          consequuntur omnis ullam maxime tenetur.
        </p>
        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Featured;
