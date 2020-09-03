import React from 'react';

const Countrydetails = (props) => {
    const {name, capital, flag, region, population, nativeName, demonym, numericCode, languages, alpha2Code, callingCodes, subregion, timezones, borders, } = props.country;
    return (
        <div style={{textAlign:'center'}}>
            <img style={{width:"180px"}}src={flag} alt=""/>
            <h1>Country name: {name}</h1>
            <h2>Capital: {capital}</h2> 
            <h3>Population: {population}, Region: {region}</h3>
            <p>NativeName:{nativeName},
            Demonym:{demonym}, NumericCode:{numericCode}, 
             Alpha2Code:{alpha2Code}, 
            CallingCodes:{callingCodes},  Subregion:{subregion}, 
            Timezones:{timezones},  Borders:{'borders'}
            </p>

        </div>
    );
};

export default Countrydetails;