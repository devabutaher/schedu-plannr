import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import UpdateTeam from "./UpdateTeam";

const Team = () => {
  const { user }: any = useContext(AuthContext);

  const {
    data: team = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["team", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://scheduplannr-server.vercel.app/team?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  console.log(team);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  const handleDelete = (e: any) => {
    Swal.fire({
      title: "Do you want to delete this team?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scheduplannr-server.vercel.app/team/${e._id}`, {
          method: "DELETE",
          headers:{
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          }
        })
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

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link to={"/dashboard/createTeam"}>
          <button className="inline-block rounded bg-primary px-4 py-2 font-medium text-white hover:bg-indigo-700">
            <div className="flex items-center gap-4">
              <div>
                <IoCreateOutline />
              </div>
              <div>
                <p>Create Team</p>
              </div>
            </div>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {team.map((e: any, i: number) => {
          const {
            _id,
            name,
            name1,
            name2,
            name3,
            name4,
            email,
            email1,
            email2,
            email3,
            email4,
            description,
          } = e;

          return (
            <div key={i} className="shadow-2xl p-10">
              <div className="overflow-x-auto">
                <div className="flex justify-end mb-5 gap-4">
                  <button className="flex items-center">
                    <label
                      htmlFor="my-modal-3"
                      className=" hover:text-black cursor-pointer"
                    >
                      <AiOutlineEdit size={"1.5rem"} />
                    </label>
                  </button>

                  <button
                    onClick={() => handleDelete(e)}
                    className=" hover:text-black"
                  >
                    <AiOutlineDelete size={"1.5rem"} />
                  </button>
                </div>
                <div>
                  <p className="text-4xl font-bold text-center mb-5">{name}</p>
                  <p className="text-center my-5">{description}</p>
                </div>
                <div></div>
                <table className="divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                        Email
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium ">
                        {name1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 ">{email1}</td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium ">
                        {name2}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 ">{email2}</td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium ">
                        {name3}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 ">{email3}</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium ">
                        {name4}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 ">{email4}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* this is modal */}
              {
                <UpdateTeam
                  name={name}
                  name1={name1}
                  name2={name2}
                  name3={name3}
                  name4={name4}
                  email={email}
                  email1={email1}
                  email2={email2}
                  email3={email3}
                  email4={email4}
                  description={description}
                  _id={_id}
                  refetch={refetch}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
