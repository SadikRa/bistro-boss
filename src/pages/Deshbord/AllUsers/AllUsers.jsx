import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AiFillDelete } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure ";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data();
  });

  const handleMakeAdmin = (user) =>{
     fetch(`http://localhost:5000/users/admin/${user._id}`,
     {
        method: 'PATCH'
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
     })
  }

  const handleDelete = (user) => {

  };

  return (
    <div className="w-full p-5">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h2 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name </th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* row 1 */}

          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user.name}</td>
              <td>
                {
                    user.role === 'admin' ? "admin" :

                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-danger bg-orange-300 text-white btn-lg">
                    <RiAdminFill />
                  </button>
                }
               
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user)}
                  className="btn btn-danger bg-[red] text-white btn-lg"
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
