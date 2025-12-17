// ======================= services/projectApi.js =======================
import api from "./api";


export const getProjects = () => api.get("/projects");


// ======================= hooks/useFetch.js =======================
import { useEffect, useState } from "react";


export default function useFetch(fetchFn) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
fetchFn()
.then(res => setData(res.data))
.catch(err => setError(err))
.finally(() => setLoading(false));
}, []);


return { data, loading, error };
}