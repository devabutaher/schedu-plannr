import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import DetailsPage from "./DetailsPage";

const UpdateProfile = () => {
  const { user }: any = useContext(AuthContext);

  const [userInfo, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://localhost:5000/user?email=${user?.email}`
        )
      ).json();

      setData(data);
    };

    dataFetch();
  }, [user?.email]);

  return (
    <div>
      {userInfo?.map((singleUser: any) => (
        <DetailsPage key={singleUser?._id} singleUser={singleUser} />
      ))}
    </div>
  );
};

export default UpdateProfile;