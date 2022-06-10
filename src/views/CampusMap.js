import React from 'react'
import PropTypes from 'prop-types'
import NextLecture from "../components/NextLecture";
import Map from "../components/Map";

function CampusMap(props) {
    return (
        <div>
            <NextLecture Lecture={'UX Strategies'} Time={'09:00'} Room={'E02'} />
            <Map/>
        </div>


    )
}


export default CampusMap;