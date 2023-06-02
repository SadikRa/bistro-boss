import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (row) =>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/carts/${row._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
               
            })
        }
      })

   
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex h-20 items-center justify-evenly">
        <h3 className="text-3xl">Total item : {cart.length}</h3>
        <h3 className="text-3xl">Total price : {total}</h3>
        <button className="btn btn-warning">pay</button>
      </div>
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>
             #
              </th>
              <th>Food</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {
                cart.map(( row , index) => <tr key={row._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={row.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                    {row.name}
                    </td>
                    <td>{row.price}</td>
                    <th>
                      <button onClick={() => handleDelete(row)} className="btn btn-ghost bg-[red]text-white btn-lg"><AiFillDelete /></button>
                    </th>
                  </tr> )
            }

           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
