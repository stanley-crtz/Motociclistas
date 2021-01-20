import React from 'react';
import { useFetchData } from '../Hooks/useFetchData';
import {Card} from './Card';

export const Sources = () => {

    const {data, loading} = useFetchData();

    return (
        <div className="sources">
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            {
                data.map((val, i) => <Card id={val.id} time={val.time} contador={val.contador} key={i}/>)
            }

        </div>
    )
}

