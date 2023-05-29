import img from "../../../assets/home/chef-service.jpg";

const ShefSevices = () => {
  return (
    <div
      className="hero h-[450px] mt-16 mb-20"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="bg-white pl-36 pr-36 pb-16 pt-16">
        <div className="max-w-md text-black">
          <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            amet nesciunt eaque aspernatur quam mollitia aperiam ipsam explicabo
            modi minima accusantium, minus quas facere ducimus recusandae
            tenetur, nisi a illo?
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShefSevices;
