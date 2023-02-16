import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import AddBlog from "./AddBlog";

const Getuserinfo = () => {
  const { user }: any = useContext(AuthContext);

  const [userInfo, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://scheduplannr-server.vercel.app/user?email=${user?.email}`
        )
      ).json();

      setData(data);
    };

    dataFetch();
  }, [user?.email]);
  return (
    <div>
      {userInfo?.map((singleUser: any) => (
        <AddBlog key={singleUser?._id} singleUser={singleUser} />
      ))}
    </div>
  );
};

export default Getuserinfo;
