import React from 'react'
import NavBar from './Components/NavBar'
import Section1 from './Components/Section1' 
import Section2 from './Components/Section2' 
import Section3 from './Components/Section3' 
import Parcours from './Components/Parcours'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
export default function App() {
  return (
    <>
    <NavBar/>
    <Section1/>
    <Section2/>
    <Parcours/>
    <Section3/>
     <Contact/>
    <Footer/>
    </>
  )
}