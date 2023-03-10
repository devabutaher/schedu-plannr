import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";
import Loading from "../../../Shared/Loading/Loading";
import EditSchedule from "./EditSchedule";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MySchedule = () => {

  const { user }: any = useContext(AuthContext)
  const [checked, setChecked] = useState(true)
  useTitle("My Schedule");

  const {
    data: mySchedule,
    isLoading,
    refetch,
  } = useQuery(["mySchedule"], () => {
    return axios
      .get(
        `http://localhost:5000/mySchedule?email=${user?.email}`
      )
      .then((res) => res.data);
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  const handleDelete = (e: any) => {
    Swal.fire({
      title: "Do you want to delete this schedule?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/createSchedulee/${e._id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Schedule Deleted Successfully");
            }
          });
      }
    });
  };

  const handleChecked = (e: any) => {
    setChecked(e.target.checked)
  }

  const handleCopy = () => {
    toast.success("Schedule Link Copied");
  }

  return (
    <div className="pl-3 md:pl-48 lg:pl-0">
      <h1 className="text-4xl font-bold text-center uppercase my-5">
      Sched<span className="text-primary">ules</span>
      </h1>
      <Link to={"/schedule/fifteen"}>
        <div className="flex justify-end">
          <button className="inline-block rounded bg-primary px-4 py-2 font-medium text-white hover:bg-indigo-700">
            <div className="flex items-center gap-4">
              <div>
                <IoCreateOutline />
              </div>
              <div>
                <p>Create Schedule</p>
              </div>
            </div>
          </button>
        </div>
      </Link>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-20">
        {mySchedule.map((e: any) => {
          const {
            title,
            location,
            link,
            name,
            value,
            ary,
            organization,
            _id,
            description,
            phone,
            email,
          } = e;
          return (
            <div key={_id}>
              <div className={`w-80 border-t-8 ${checked ? "border-primary" : "border-gray-500"} flex flex-col gap-6 p-4 rounded-lg shadow-xl`}>
                <div className="flex justify-center gap-4">
                  <div className="form-control w-52">
                    <label className="cursor-pointer label">
                      <input
                        onClick={handleChecked}
                        data-tip="ON | OFF"
                        type="checkbox"
                        defaultChecked={true}
                        className="toggle toggle-primary tooltip"
                      />
                    </label>
                  </div>

                  <button className="flex items-center">
                    <label
                      htmlFor="my-modal-3"
                      className="tooltip hover:text-black cursor-pointer"
                      data-tip="Edit"
                    >
                      <AiOutlineEdit size={"2rem"} />
                    </label>
                  </button>

                  <button
                    onClick={() => handleDelete(e)}
                    className="tooltip hover:text-black"
                    data-tip="Delete"
                  >
                    <AiOutlineDelete size={"2rem"} />
                  </button>
                  <button className="tooltip hover:text-black" data-tip="Share">
                    <AiOutlineShareAlt size={"2rem"} />
                  </button>
                  <CopyToClipboard
                    onCopy={handleCopy}
                    text={link}>
                    <button className="tooltip hover:text-black" data-tip="Copy">
                      <AiOutlineCopy size={"2rem"} />
                    </button>
                  </CopyToClipboard>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl">{title}</h1>
                  <h3 className="text-xl">{value?.toString().slice(0, 10)}</h3>
                  <div className="flex flex-col gap-2">
                    <p className="">Host name: {name}</p>
                    <p className="">Organization: {organization}</p>
                    <p className="">Location: {location}</p>
                    {ary && <p className=""><b>Meeting time:</b> {ary.join(",")}</p>}

                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    className="text-primary underline"
                    href={link}
                    target="_blank"
                  >
                    /Schedule Link
                  </a>
                  <CopyToClipboard
                    onCopy={handleCopy}
                    text={link}>
                    <div className="flex gap-2 items-center p-2 border rounded-lg border-primary hover:bg-primary hover:text-white cursor-pointer text-sm">
                      <FiCopy size={"1rem"} />
                      <span>Copy Link</span>
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
              {/* this is modal */}
              {
                <EditSchedule
                  organization={organization}
                  // slot={slot}
                  name={name}
                  link={link}
                  location={location}
                  title={title}
                  description={description}
                  phone={phone}
                  email={email}
                  _id={_id}
                  refetch={refetch}
                  ary={ary}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MySchedule;
