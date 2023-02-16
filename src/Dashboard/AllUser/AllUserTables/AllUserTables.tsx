import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { toast } from "react-hot-toast";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useQuery } from "react-query";

// interface DataRow {
// name: string;
// email: string;
// role: string;
// _id: string
// }
type DataRow = {
  name: string;
  email: string;
  role: string;
  _id: string;
  delete: string;
};

const AllUserTables: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState([]);

  const { data: userInfo = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://scheduplannr-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    const result = userInfo?.filter((user: { email: string }) => {
      return user?.email?.toLowerCase()?.match(search?.toLowerCase());
    });
    setFilterUser(result);
  }, [userInfo, search]);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "User Email",
      selector: (row) => row.email,
    },
    {
      name: "Handle Admin",
      cell: (row) => (
        <>
          {row?.role !== "admin" && (
            <button onClick={() => handleAdmin(row._id)} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </>
      ),
    },
    {
      name: "Status",
      cell: (row) => (
        <>
          {row?.role === "admin" && (
            <p className="flex items-center">
              {row.role}{" "}
              <MdOutlineVerifiedUser className="w-4 h-4 text-blue-400" />
            </p>
          )}
        </>
      ),
    },
    {
      name: "Delete User",
      cell: (row) => (
        <>
          {row?.role === "admin" ? (
            <button
              onClick={() => handleDelete(row._id)}
              className="btn btn-xs"
            >
              Delete
            </button>
          ) : (
            <button
              onClick={() => handleDelete(row._id)}
              className="btn btn-xs"
            >
              Delete
            </button>
          )}
        </>
      ),
    },
  ];

  const handleAdmin = (id: string) => {
    fetch(`https://scheduplannr-server.vercel.app/user/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };

  const handleDelete = (id: string) => {
    fetch(`https://scheduplannr-server.vercel.app/user/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("User Deleted successful");
          refetch();
        }
      });
  };

  return (
    <DataTable
      title="User List"
      columns={columns}
      data={filterUser}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search User"
          className="w-[250px]  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      }
    />
  );
};

export default AllUserTables;