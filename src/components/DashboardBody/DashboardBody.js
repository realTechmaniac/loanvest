import React from 'react'
import {useHistory} from 'react-router-dom'

const DashboardBody  =  () => {

    const history   = useHistory()

    const authPerson = localStorage.getItem('auth_item')

    const showForm = () => {

        history.push('/biodataform')

    }
  
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0"> Welcome  {authPerson ?  authPerson : ''} ! </h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard </li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                        <div className="col-lg-12 col-12">
                            {/* small box */}
                            <div className="small-box bg-primary">
                            <div className="inner p-4">
                                <p>Available Limit (Naira)</p>
                                <h3>&#8358; 2,000</h3>
                               <div className = "float-right">
                                  <h2>Cash loan</h2>
                               </div>   
                                <button type="button" class="btn btn-sm btn-light" onClick = {showForm}>Apply</button>

                            </div>
                            <div className="icon">
                                <i className="ion ion-bag" />
                            </div>
                            {/* <a href="#" className="">More info <i className="fas fa-arrow-circle-right" /></a> */}
                            </div>
                        </div>
                        {/* ./col */}
                        
                        {/* ./col */}
                        
                        </div>
                        {/* /.row */}
                        {/* Main row */}
                        <div className="row">
                        
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                </div>

        )
    }

export default DashboardBody