import { FaShoppingCart,FaUserFriends, FaHome, FaCalendarAlt } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { TbBrandBooking } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";


const Dashbord = () => {
  const [cart] = useCart()
  // const [ isAdmin ] = useAdmin()
  const isAdmin = true


  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}

        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content text-black ">
          {/* <!-- Sidebar content here --> */}


        {
          isAdmin ? <>
            <li>
            <NavLink to={'/dashbord/adminHome'}>
              <FaHome className="text-2xl" /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashbord/addItem'}>
              <ImSpoonKnife /> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashbord/manageItem'}>
              <FaShoppingCart className="text-2xl" /> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'}>
              <TbBrandBooking className="text-2xl" /> Manage bookings
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashbord/allUsers'}>
              <FaUserFriends className="text-2xl" />
              All Users
            </NavLink>
          </li>

          
          </> :
          <>
            <li>
            <NavLink to={'/dashbord/userHome'}>
              <FaHome className="text-2xl" /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashbord/history'}>
              <MdAccountBalanceWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashbord/myCart'}>
              <FaShoppingCart className="text-2xl" /> My Cart
              <span className="badge badge-secondary">{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashbord/reservation'}>
              <FaCalendarAlt className="text-2xl" />
              Reservation
            </NavLink>
          </li>

          </>
        }

        


          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FiMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FiMenu /> Our Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
