import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title,  image}) => {
    return (
        <div className="pt-16">
        {title && <Cover title={title} image={image}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
        {
            items.map((item) => <MenuItem
            key={item._id} item={item}></MenuItem>)
        }
    </div>
   <div className="text-center">
   <Link to={`/order/${title}`}>
    <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
    </Link> 
   </div>
    </div>
    );
};

export default MenuCategory;