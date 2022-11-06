import { useState, useEffect } from "react";

//Fetching data
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const rawData = await response.json();
      setData(rawData);
      setLoading(false);
    } catch (error) {
      console.log("not loaded")
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, data };
};
export default useFetch