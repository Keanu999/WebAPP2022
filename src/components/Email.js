// src/Components/Email.js

import React from 'react'
import PropTypes from 'prop-types'
import EmailBG from "../images/email.jpeg";

function Email(props) {

    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
        backgroundImage:`url(${EmailBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '30%',
        margin: "1%",
        height: 126,
        display: 'inline-block'
    };
    const fontStyle = {
        textAlign: "center",
        color: "#000000",
        fontSize: 20,
        paddingTop: 70,
    }

    return (
        <div style={divStyle}>

            <h1 style={fontStyle}> Email </h1>

        </div>

    )
}

export default Email