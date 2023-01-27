
import { useQuery } from "react-query";

const Notes = () => {

  // const [text, setText] = useState<any>(null);

  const { data: notes, isLoading, refetch } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/notes');
      const data = res.json();
      refetch();
      return data;
    }
  })
  // const { data: note }: any = useQuery({
  //   queryKey: ['note'],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/notes/${note._id}`);
  //     const data = res.json();
  //     return data;
  //   }
  // })


  // const [bd, setBd] = useState<any>(null);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/notes/${notes.id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  if (isLoading) {
    return <p>loading...</p>
  }
  // const arr: any = [];
  // for (let i = 0; i < notes.length; i++) {
  //   arr.push(notes[i]._id)
  //   return arr;
  // }
  // console.log(arr)

  return (
    <div>
      <div className="">
        <h1 className="text-4xl text-center mb-5 text-primary font-semibold">
          Your Notes
        </h1>

        {
          notes.map((note: any) =>
            <div className="border border-gray-500 bg-blue-100 py-5 px-10 rounded-lg m-3">
              <div className="text-2xl flex items-center justify-between">
                <label htmlFor="my-modal-3" className="w-full">
                  <p>{note.title}</p>
                </label>
                {/* <span className="flex items-center text-lg">
                  11/12/2023{" "}
                  <RiDeleteBin6Line className="text-3xl ml-5 hover:text-red-700" />
                </span> */}

              </div>


            </div>)
        }


        < input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <p>l</p>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Notes;
