// src/Components/CampusMap.js

import React from 'react'

function Header(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        background: 'linear-gradient(93.99deg, rgba(237, 16, 130, 0.8) 1.26%, rgba(237, 16, 130, 0.8) 98.68%), #D80000',
        width: '100%',
        height: 105,
        display: 'inline-block',
        marginBottom: '1%'
    };
    const fontStyle = {
        textAlign: "center",
        color: "#blue",
        fontSize: 30,
        paddingTop: 30,

    }

    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> Solent Student Portal </h1>

        </div>

    )
}

export default Header