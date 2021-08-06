import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
               <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="images/sproutpay-white.png" alt="AdminLTE Logo" className="" style={{opacity: '.8'}} />
                     
                    </a>
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <i className="nav-icon fas fa-user pt-2 text-white" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">User</a>
                        </div>
                        </div>
                       
                        <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                                            with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                Dashboard
                                <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                           
                            </li>
                            <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-money-check" />
                                <p>
                                Transactions
                                <span className="right badge badge-light">Coming Soon</span>
                                </p>
                            </a>
                            </li>
                           
                            <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>
                                Profile
                                <span className="right badge badge-light">Coming Soon</span>
                                </p>
                            </a>
                            </li>
                           
                           
                            
                        </ul>
                        </nav>
                    </div>
                    </aside>
            </div>
        )
    }
}
