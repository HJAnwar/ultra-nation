import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, flag} = props.country;
    return (
        <div style={{textAlign:"center"}}>
            <h2>Country Name: {name}</h2>
            <img style={{width:"80px"}} src={flag} alt=""/>
            <br/>
            <Link to={`/country/${name}`}> <button>Show detail {name}</button></Link>
        </div>
    );
};

export default Country;