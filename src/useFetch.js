import { useState, useEffect } from "react";

import Api from "./Api";



const useFetch = () => {
  const [data, setData] = useState({
    title: "",
    results: [],
  });


  useEffect(() => {
    if (data.title !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await Api.get(`/${data.title}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data]);

  return { data, setData };
};

export default useFetch;