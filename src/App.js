import React from 'react'
import Header from './header/header';
import Description from './descripion/description';
import Partner from './partner/partner';
import About from './about/about';
import Footer from './footer/footer';


const HomePage = () => {
    
    return (
        <div style={{backgroundColor: "#EAF0FF",width:"fit-content"}}>
           <Header/> 
           <Description/>
           <Partner/>
           <About/>
           <Footer/>
        </div>
    )
}

export default HomePage;
