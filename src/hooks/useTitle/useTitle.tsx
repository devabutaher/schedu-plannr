import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title}-ScheduPlannr`;
  }, [title]);
};

export default useTitle;
