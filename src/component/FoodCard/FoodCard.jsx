import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart()

  const { user } = useContext(AuthContext);

  const handleAddToCart = item => {
    console.log(item);
    if(user && user?.email){
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
        console.log(cartItem)
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
              refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
        Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
}

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Food" className="rounded-xl" />
        </figure>
        <p className="bg-black text-white absolute right-0 mr-12 mt-12 p-2 rounded">
          {price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
