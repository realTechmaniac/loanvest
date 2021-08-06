import React, { Component } from 'react'
import {useHistory} from 'react-router-dom'
import axios  from 'axios'
import swal from 'sweetalert'

const DashboardHeader  = () => {

    const history = useHistory()

    const logoutSubmit = (e) => {

        e.preventDefault()

        axios.post('api/logout').then(response => {

            if(response.data.status === 200){

                localStorage.removeItem('auth_token', response.data.token)

                localStorage.removeItem('auth_item', response.data.username)

                swal("Success", response.data.message,"success")

                history.push('/')
            }

        })


    }

        return (

           <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                   
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                        
                        <div className="navbar-search-block">
                       
                        </div>
                    </li>
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="fa fa-arrow-circle-down text-white"/>
                        <span className="badge badge-danger navbar-badge"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        
                        <div className="dropdown-divider" />
                        
                        <div className="dropdown-divider" />
                        
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer" onClick = {logoutSubmit }>LOG OUT</a>
                        </div>
                    </li>

                    {/* Notifications Dropdown Menu */}
                  
                    </ul>
                </nav>
            </div>

        )
    
}


export default DashboardHeader