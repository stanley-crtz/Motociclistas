import { useEffect, useState } from "react";
import { getData } from '../Helpers/getData';

export const useFetchData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getData()
            .then( data => setState({
                data,
                loading: false
            }))

    },[])


    return state;

}