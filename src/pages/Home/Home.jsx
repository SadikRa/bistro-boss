import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularManu from "./PopularManu/PopularManu";
import TESTIMONIALS from "./TESTIMONIALS/TESTIMONIALS";
import ShefSevices from "./ShefSevices/ShefSevices";
import HomeCard from "./HomeCard/HomeCard";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
                <Banner></Banner>
                <Category></Category>
                <ShefSevices></ShefSevices>
                <PopularManu></PopularManu>
                <div className="bg-black px-16 py-8 mx-40 mb-12">
                    <h4 className="text-2xl text-center text-white">Call Us: +88 0192345678910</h4>
                </div>
                <HomeCard></HomeCard>
                <Featured></Featured>
                <TESTIMONIALS></TESTIMONIALS>
        </div>
    );
};

export default Home;