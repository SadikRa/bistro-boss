import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data =>{
      // console.log(data)
      const formData = new FormData();
      formData.append('image', data.image[0])
     fetch(img_hosting_url, {
      method: "POST",
      body: formData
     })
     .then(res => res.json())
     .then(imgResponse => {
      if(imgResponse.success){
        const imgUrl = imgResponse.data.display_url
        const {recipe, name,category, price } = data;
        const newItem = {name, category, recipe, price: parseFloat(price), image:imgUrl}
        console.log(newItem)
        axiosSecure.post('/menu', newItem)
        .then(data => {
          console.log(data.data)
          if(data.data.insertedId){
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added Success Full',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      // console.log(imgResponse)
     })
    };
    console.log(errors);
    console.log(img_hosting_token)
  return (
    <div className="w-full px-12">
      <SectionTitle
        subHeading={"What New"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
            type="text"
            {...register("name", {required: true, maxLength: 80})}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-8">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select {...register("category", { required: true })} className="select select-bordered w-full">
            <option>Salad</option>
            <option>pizza</option>
            <option>soup</option>
            <option>desserts</option>
            <option>drinks</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        </div>
        <div className="form-control">
          <label className="label">

            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
          {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div>
        <label className="label">
            <span className="label-text">Item Images*</span>
          </label>
        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
        </div>
        <input type="submit" className="btn btn-sm mt-6 w-full" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
