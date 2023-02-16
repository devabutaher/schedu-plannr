import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
interface dataProps {
  name: string;
  email: string;
  image: any;
  category: string;
  postDate: string;
  title: string;
  description: string;
  photoURL: any;
}
const AddBlog = ({ singleUser }: any) => {
  const { user }: any = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataProps>();

  const imageHostKey = "8b90eb0929bfebb0ad08213a1dc74625";

  const handleAdd = (data: dataProps) => {
    saveToDatabase(
      user.email,
      data.category,
      data.postDate,
      data.image,
      data.title,
      data.description
    );
  };

  const saveToDatabase = (
    email: string,
    category: string,
    postDate: string,
    image: any,
    title: string,
    description: string
  ) => {
    setIsLoading(true);
    const images = image[0];
    const formData = new FormData();
    formData.append("image", images);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const userData = {
            name: singleUser.name + " " + singleUser.lastName,
            about: singleUser.about,
            email,
            category,
            postDate,
            image: imgData.data.url,
            photoURL: singleUser.image,
            title,
            description,
          };

          fetch(`https://scheduplannr-server.vercel.app/blogs`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                console.log(data);
                navigate("/blogs");
                setIsLoading(false);
                toast.success("Add Blog Successful");
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="my-10 pl-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h1 className="text-center text-4xl py-10 font-semibold">
            Add Your <span className="text-primary">Blog</span>
          </h1>

          <form
            onSubmit={handleSubmit(handleAdd)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto"
          >
            <div>
              <label htmlFor="title">Title</label>
              <input
                {...register("title", {
                  required: "title is required",
                })}
                id="title"
                name="title"
                className="w-full bg-transparent text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Title"
              />
              {errors.title && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label htmlFor="description">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                id="description"
                name="description"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                placeholder="Describe here, description your title!"
              />
              {errors.description && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <select
                {...register("category")}
                className="select input-bordered w-full max-w-xs"
              >
                <option disabled>Please Select your Category</option>
                <option value="Technology">Technology</option>
                <option value="News">News</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Others">Others</option>
              </select>
              {errors.category && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="postDate">Post Date</label>
              <input
                {...register("postDate", {
                  required: true,
                })}
                type="date"
                id="postDate"
                name="postDate"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.postDate && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.postDate.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="img" className="block dark:text-gray-400">
                Blog Image
              </label>
              <input
                {...register("image", {
                  required: true,
                })}
                type="file"
                name="image"
                id="image"
                accept="image/*"
                placeholder="Enter Your img"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 bg-transparent focus:dark:border-violet-300"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button type="submit" className="btn btn-primary text-white">
                Add BLog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
