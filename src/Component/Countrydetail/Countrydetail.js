import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Countrydetails from '../Countrydetails/Countrydetails';

const Countrydetail = () => {
    const {name} = useParams();
    const [count, setCount] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setCount(data));
    }, [])
    return (
        <div>
            <h2>{count.name}</h2>
                {
                    count.map(country => <Countrydetails country={country}></Countrydetails>)
                }
        </div>
    );
};

export default Countrydetail;