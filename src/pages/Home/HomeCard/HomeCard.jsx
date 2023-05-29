import img1 from "../../../assets/home/slide1.jpg";
const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mb-16">




      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="suop"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-400">Add to cart</button>
          </div>
        </div>
      </div>



      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="suop"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-400">Add to cart</button>
          </div>
        </div>
      </div>



      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="suop"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-400">Add to cart</button>
          </div>
        </div>
      </div>




    </div>
  );
};

export default HomeCard;
