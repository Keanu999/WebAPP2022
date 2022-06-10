// src/Components/LibraryLoans.js

import React from 'react'
import LibraryBG from '../images/Library.jpeg'

function Library(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundImage:`url(${LibraryBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '48%',
        margin: "1%",
        height: 126,
        display: 'inline-block'
    };
    const fontStyle = {
        textAlign: "center",
        color: "#3240a8",
        fontSize: 20,
        paddingTop: 70,
    }

    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> Library Services</h1>

        </div>

    )
}

export default Library