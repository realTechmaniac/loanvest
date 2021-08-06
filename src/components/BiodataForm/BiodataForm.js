import React, { Component } from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import LoanForm from '../LoanForm/LoanForm'
import Menu from '../Menu/Menu'

export default class BiodataForm extends Component {
    render() {
        return (
            <div>
                <DashboardHeader/>
                <Menu/>
                <LoanForm/>
            </div>
        )
    }
}
