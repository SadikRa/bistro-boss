import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import image from "../../../assets/menu/banner3.jpg";
import image2 from "../../../assets/menu/dessert-bg.jpeg";
import pizzaa from "../../../assets/menu/pizza-bg.jpg";
import salads from "../../../assets/menu/salad-bg.jpg";
import soups from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title={"our menu"} image={image}></Cover>
      <div className="mt-16">
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      </div>
       {/* offered category */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert category */}
      <MenuCategory items={dessert} title={'Dessert'} image={image2}></MenuCategory>
      {/* soup category */}
      <MenuCategory items={pizza} title={'pizza'} image={pizzaa}></MenuCategory>
      {/* salad category */}
      <MenuCategory items={salad} title={'salad'} image={salads}></MenuCategory>
      {/* soup category */}
      <MenuCategory items={soup} title={'soup'} image={soups}></MenuCategory>
    </div>
  );
};

export default Menu;
