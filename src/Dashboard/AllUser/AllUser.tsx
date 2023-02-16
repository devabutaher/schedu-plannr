import useTitle from "../../hooks/useTitle/useTitle";
import AllUserTables from "./AllUserTables/AllUserTables";


const AllUser = () => {
  useTitle("Admin & Users")

  
  return (
    <div className="flex flex-col w-full">
      <AllUserTables />
    </div>
  );
};

export default AllUser;
