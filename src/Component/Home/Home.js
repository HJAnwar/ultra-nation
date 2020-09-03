import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countrys, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res =>res.json())
        .then(data =>setCountry(data))
    }, [])
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Country List: {countrys.length}</h2>
           {
               countrys.map(country => <Country country={country}></Country>)
           }
        </div>
    );
};

export default Home;