// src/Components/Grades.js

import React, {Component} from 'react'
import ResultsBG from "../images/Grades.png";
import {withRouter} from "react-router-dom";
const divStyle = {
    boxShadow: "0px 10px 20px rgba(237, 16, 130, 0.8)",
    backgroundImage:`url(${ResultsBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '66%',
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




class Grades extends Component {
    handleClick = (value) => {
        this.props.history.push("/results");
    };
    render() {
        return (
            <div onClick={this.handleClick} style={divStyle}>
                <h1 style={fontStyle}>Grades</h1>


            </div>

        );
    }

}

export default withRouter(Grades)


