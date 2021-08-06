import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from '../Button/Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import axios from 'axios'
import swal from 'sweetalert'

const Navbar = () => {

    const history = useHistory()

    const [click, setClick]     = useState(false)

    const [button , setButtton] = useState(true)

    const handleClick           = ()  => setClick(!click)

    const closeMobileMenu       = () => setClick(false)

    const showButton = () => {

        if(window.innerHeight <= 960){

            setButtton(false)

        }else{

            setButtton(true)

        }
    }

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

    useEffect(() => {
        setButtton()
    }, [])

    window.addEventListener('resize', showButton)

    let authButtons =  ``

    if(!localStorage.getItem('auth_token')){

        authButtons = (

            <Link to= "/register" className ="btn-link">
                <Button buttonStyle = "btn--outline" btnSize= "btn--mobile">SIGN UP</Button>
            </Link>
        )

    }else{

        authButtons = (
 
            <Link to= "/register" className ="btn-link">
                <Button buttonStyle = "btn--outline" btnSize= "btn--mobile" onClick = {logoutSubmit} >LOG OUT</Button>
             </Link>

        )


    }

    return(

        <>

        <IconContext.Provider value= {{color : '#fff'}}>

            <div className = "navbar">

                <div className = "navbar-container container">

                    <Link to = "/" className ="navbar-logo" onClick = {closeMobileMenu}>
                       
                        <img src ="images/sproutpay-white.png" alt = "logo"/>
                    </Link>
                    <div className ="menu-icon" onClick = {handleClick}>

                        {click ? <FaTimes/> : <FaBars/>}

                    </div>  

                    <ul className = {click ? 'nav-menu  active' : 'nav-menu'}>

                        <li className ="nav-item">
                            <Link  to ="/" className ="nav-links" onClick = {closeMobileMenu}>Home</Link>
                        </li>
                        <li className ="nav-item">
                            <Link  to ="/services" className ="nav-links" onClick = {closeMobileMenu}>Services</Link>
                        </li>
                        <li className = "nav-item">
                            <Link  to ="/products" className ="nav-links" onClick = {closeMobileMenu}>Products</Link>
                        </li>
                        <li className = "nav-btn" onClick = {closeMobileMenu }>
                            {button ?  (

                                <>
                                    <Link to ="/register" className = "btn-link" onClick = {closeMobileMenu}>
                                        <Button btnStyle ='btn--outline'>SIGN UP</Button>
                                    </Link>

                                </>
                            ) : (

                                <>

                                    {authButtons}

                                </>
                                
                            )}

                        </li>
                    </ul>

                </div>

             </div>

        </IconContext.Provider>

        </>
    )
}


export default Navbar