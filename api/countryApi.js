import axios from 'axios'
import {useEffect, useState} from 'react'

const baseUrl = "https://6092790585ff510017212e4b.mockapi.io/example/country";

const usegetCountries = (urlParams, page) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect (async() => {
        try{
            setIsloading(true)
            const res = await axios.get(baseUrl+urlParams);
            console.log(res.data);
            setCountries(res.data);
        } catch (error){
            console.log(error.message);
            console.log(error.status);
        } finally {
            setIsloading(false);
        }
    }, [urlParams, page])
    return {countries, isLoading};
}

const usegetLimit = () => {
    const [limit, setLimit] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(async() => {
        try{
            setIsloading(true);
            const res = await axios.get(baseUrl);
            console.log(res.data);
            setLimit(res.data);
        } catch(error){
            console.log(error.message);
            console.log(error.status);
        } finally {
            setIsloading(false);
        }
    }, [])
    return limit;
}

export default {usegetCountries, usegetLimit};

