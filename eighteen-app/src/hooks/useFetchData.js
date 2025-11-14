import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);
        try {
            const userData = await axios.get(url)
            setData(userData.data)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return { data, loading, error };

}

export default useFetchData;