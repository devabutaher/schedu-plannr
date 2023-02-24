import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const BlogCard = ({ allBlogs, refetch }: any) => {
  const { user }: any = useContext(AuthContext);
  const { title, description, image, _id } = allBlogs;
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);

  const handleDelete = (_id: any) => {
    Swal.fire({
      title: "Do you want to delete this schedule?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scheduplannr-server.vercel.app/blogs/${_id}`, {
          method: "DELETE",
          headers: {
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("BLog Deleted Successfully");
            }
          });
      }
    });
  };

  return (
    <div data-aos="fade-right">
      <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-6 relative">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            <>
              {" "}
              {description ? (
                <>{description.slice(0, 100) + "...."}</>
              ) : (
                description
              )}
            </>
          </p>
          <div className="flex justify-between">
            <div>
              <Link className="inline-block" to={`blogPost/${_id}`}>
                <span className="text-primary">Read more</span>
              </Link>
            </div>
            <div>
              {isAdmin && (
                <button
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                  onClick={() => handleDelete(_id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
