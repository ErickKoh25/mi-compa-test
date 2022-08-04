import { useEffect, useState } from "react";
import { initialProps } from "../interfaces/components/FormProps";
import { getAddress } from "../services/formRequest";

function useFetchAddressList() {
  const [data, setData] = useState<null | Array<initialProps>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | boolean>(null);

  const fetchAddress = async () => {
    try {
      const response = await getAddress();
      setData(response.data);
    } catch (errorResponse) {
      if (errorResponse) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetchAddress();
  }, []);

  return { data, loading, error };
}

export default useFetchAddressList;
