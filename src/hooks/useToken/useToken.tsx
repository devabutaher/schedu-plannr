import { useEffect, useState } from "react";

const useToken = (email: string) => {
  const [token, setToken] = useState<any>("");

  useEffect(() => {
    if (email) {
      fetch(`https://scheduplannr-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return token;
};

export default useToken;
