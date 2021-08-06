import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

const Home = () => {

    return(

        <> 
            <Navbar/>
                <HeroSection  {...homeObjOne}/>
                <HeroSection  {...homeObjThree}/>
                <HeroSection  {...homeObjTwo}/>
                <HeroSection  {...homeObjFour}/>
            <Footer/>

        </> 
    )
}


export default Home