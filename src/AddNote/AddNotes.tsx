import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormValues = {
  title: string;
  note: string;
};

const AddNotes = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const addNotes: any = {
      title: data.title,
      note: data.note,
    };

    fetch("https://scheduplannr-server.vercel.app/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(addNotes),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Saved your note!");
          reset();
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mb-5 rounded-2xl">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="  border-gray-500 py-5 lg:px-16 px-5 text-2xl text-primary font-bold">
        <h2 className="mb-5 font-semibold lg:text-3xl text-2xl">
          Take your note
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("title")}
            placeholder="Title"
            className="border border-gray-500 input input-bordered w-full mb-3 h-14 pt-3"
          ></textarea>
          <textarea
            {...register("note")}
            className="textarea textarea-bordered border-gray-500 w-full h-24"
            placeholder="What's on your mind?"
          ></textarea>
          <button className="btn btn-primary text-white px-7 mt-3">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
