
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularManu = () => {

    const [menu] = useMenu()
    const popular = menu.filter( item => item.category === 'popular' )
     
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map((item) => <MenuItem
                    key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-5">
            <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button>
       
            </div>
             </section>
    );
};

export default PopularManu;