import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const Notes = () => {
  // const [text, setText] = useState<any>(null);

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
      headers:{
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
  // const { data: note }: any = useQuery({
  //   queryKey: ['note'],
  //   queryFn: async () => {
  //     const res = await fetch(`https://scheduplannr-server.vercel.app/notes/${note._id}`);
  //     const data = res.json();
  //     return data;
  //   }
  // })

  // const [bd, setBd] = useState<any>(null);
  // useEffect(() => {
  //   fetch(`https://scheduplannr-server.vercel.app/notes/${notes.id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  // const arr: any = [];
  // for (let i = 0; i < notes.length; i++) {
  //   arr.push(notes[i]._id)
  //   return arr;
  // }
  // console.log(arr)

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
                <label
                  htmlFor="my-modal-3"
                  className="flex items-center justify-between"
                >
                  <div className="flex md:items-center justify-between hover:dark:bg-gray-900 hover:text-white border p-4 overflow-hidden rounded-xl lg:p-6">
                    <div className="">
                      <h3 className="mb-5 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-xl">
                        {note.title}
                      </h3>
                      <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 ">
                        {note.note ? (
                          <>{note.note.slice(0, 100) + "...."}</>
                        ) : (
                          note.note
                        )}
                      </p>
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
