import React from 'react'
import PropTypes from 'prop-types'
import GradeBox from '../components/GradeBox'

function Assignments(props) {
    return (
        <div>
            <GradeBox unitTitle={'Analytics and Business Intelligence'} unitCode={'QHO539'} assignmentTitle={'AE1'} gradeStatus={'A1'}/>
            <GradeBox unitTitle={'Introduction to Databases'} unitCode={'QHO416'} assignmentTitle={'Assignment'} gradeStatus={'B2'}/>
            <GradeBox unitTitle={'Research Methods Project'} unitCode={'QHO538'} assignmentTitle={'Report '} gradeStatus={'A2'}/>
            <GradeBox unitTitle={'Object Oriented Design (QHO543)'} unitCode={'QHO999'} assignmentTitle={'Report 2'} gradeStatus={'B2'}/>
            <GradeBox unitTitle={'UX Strategies'} unitCode={'QHO639'} assignmentTitle={'Portfolio'} gradeStatus={'Not yet submitted'}/>
        </div>
    )
}



export default Assignments;