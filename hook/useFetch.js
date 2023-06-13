
import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (endPoint, query)=>  {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '211777263bmsh7fa37568ba6cd2fp1d48ccjsn41107b30f0af',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = ()=>{
        setLoading(true)
        axios.request(options).then(function (response) {
            setData(response.data.data)
            setLoading(false)
        }).catch(function (error) {
            setError(error)
            setLoading(false)
        });
    }

    useEffect(()=>{
        fetchData()
    },[])



    return {data, isLoading, error}

}

export default useFetch