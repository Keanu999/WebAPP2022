// src/Components/Assignment.js

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AssignmentBG from "../images/Assignment.png";
import {withRouter} from "react-router-dom";

const divStyle = {
    boxShadow: "0px 10px 20px rgba(245, 40, 145, 0.8)",
    backgroundImage:`url(${AssignmentBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '36%',
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




class Assignment extends Component {
    handleClick = (value) => {
        this.props.history.push("/assignments");
    };
    render() {
        return (
            <div onClick={this.handleClick} style={divStyle}>
                <h1 style={fontStyle}>Assignments</h1>


            </div>

        );
    }

}

export default withRouter(Assignment)


