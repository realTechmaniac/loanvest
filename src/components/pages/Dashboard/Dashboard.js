import React from 'react'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import Menu from '../../Menu/Menu'
import DashboardBody   from '../../DashboardBody/DashboardBody'
import DashboardFooter from '../../DashboardFooter/DashboardFooter'

const Dashboard = () => {

    return (

       <div className = "wrapper">

           <DashboardHeader/>
           <Menu/>
           <DashboardBody/>
           <DashboardFooter/>

       </div>

    )    
}



export default Dashboard