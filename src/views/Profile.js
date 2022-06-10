import React from 'react'
import PropTypes from 'prop-types'
import ProfileDetails from '../components/ProfileDetails'
import Button from "../components/Button";

function Assignments(props) {
    return (
        <div>
            <ProfileDetails Name={'Silviu Macarie'} Course={'BSC Computing'} Level={5} StudentNum={10107803}/>
            <Button ButtonText={'Contact Student Services'}/>
            <Button ButtonText={'Sign Out'}/>
        </div>
    )
}



export default Assignments;