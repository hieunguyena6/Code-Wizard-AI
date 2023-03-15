import { notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetchSQLTranslationData = ({ text, isHumanToSql }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [text, isHumanToSql]);

  const fetchData = async () => {
    if (text) {
      setIsLoading(true);
      try {
        const response = await axios.post(isHumanToSql ? "/api/human-to-sql" : "/api/sql-to-human", {
          text
        });
        setData(response.data?.data);
      } catch (error) {
        notification.error({
          type: "error",
          message: error?.response?.message
        })
      }
      setIsLoading(false); 
    } else {
      setData("");
    }
  };

  return {
    isLoading,
    data,
  };
};

export default useFetchSQLTranslationData;
