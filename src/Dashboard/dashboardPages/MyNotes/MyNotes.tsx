import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const MyNotes = () => {
  const { data: notes = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://scheduplannr-server.vercel.app/notes");
      const data = await res.json();
      return data;
    },
  });
  const handleRemove = (id: any) => {
    fetch(`https://scheduplannr-server.vercel.app/users/notes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  };
  console.log(notes);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {notes?.map((noted: any) => {
        const { title, note, _id } = noted;
        return (
          <>
            <div className="card bg-white text-dark ">
              <div className="flex justify-end p-1">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost ">
                    <BsThreeDotsVertical className="w-6 h-6" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
                  >
                    <li className="flex justify-between items-center">
                      <Link to={"/edit"}>
                        <FiEdit className="w-6 h-6" />
                        Edit
                      </Link>
                    </li>
                    <li className="flex justify-between items-center">
                      <button onClick={() => handleRemove(_id)}>
                        <AiOutlineDelete className="w-6 h-6" />
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{title}!</h2>
                <p>{note}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MyNotes;
