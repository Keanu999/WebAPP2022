import React from 'react'
import PropTypes from 'prop-types'
import DeadlineBox from '../components/DeadlineBox'

function Assignments(props) {
    return (
        <div>
            <DeadlineBox unitTitle={'Web Application Development'} unitCode={'QHO540'} assignmentTitle={'Report 1'} daysDue={30} submissionStatus={'Submitted'} dateDue={'10/07/2022'}/>
            <DeadlineBox unitTitle={'Object Oriented Programming'} unitCode={'QHO444'} assignmentTitle={'Portfolio '} daysDue={10} submissionStatus={'Not Submitted'} dateDue={'20/06/2022'}/>
            
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}



export default Assignments;