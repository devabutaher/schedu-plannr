import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const Notes = () => {

  const {
    data: notes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await fetch("https://scheduplannr-server.vercel.app/notes");
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (id: any) => {
    fetch(`https://scheduplannr-server.vercel.app/notes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`deleted successfully`);
        }
      });
  };
  refetch();
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="my-10">
        <h1 className="text-4xl text-center mb-5 text-primary font-semibold">
          Your Notes
        </h1>

        <div className="overflow-y-auto h-[330px]">
          {notes.map((note: any) => (
            <ul className="p-4 lg:p-2">
              <li>
                <div className="border hover:bg-primary hover:text-white rounded-xl flex md:items-center justify-between px-5  ">
                  <label
                    htmlFor="my-modal-3"
                    className="flex items-center justify-between w-full"
                  >
                    <div className=" w-full mt-5 overflow-hidden  ">
                      <div className="">
                        <h3 className="mb-5 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-xl">
                          {note.title}
                        </h3>
                      </div>

                    </div>

                  </label>


                  </div>

                  <div className="flex md:items-center text-lg justify-end">
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(note._id)}
                      className="text-3xl ml-8 hover:text-red-700 cursor-pointer"
                    />
                  </div>

                </div>


                </label>

              </li>

              {/* modal */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <p className="text-2xl font-bold mt-5">{note.title}</p>
                  <p className="py-10">{note.note}</p>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Notes;
