import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularManu from "./PopularManu/PopularManu";
import TESTIMONIALS from "./TESTIMONIALS/TESTIMONIALS";

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Category></Category>
                <PopularManu></PopularManu>
                <Featured></Featured>
                <TESTIMONIALS></TESTIMONIALS>
        </div>
    );
};

export default Home;