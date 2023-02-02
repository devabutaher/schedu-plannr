import { useEffect, useState } from "react";

const useAdmin = (email: string) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://scheduplannr-server.vercel.app/user/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
