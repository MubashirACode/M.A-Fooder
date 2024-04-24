import React from 'react'
import { Navbar } from '../components/Navbar'
import { Categaory } from '../components/Categaory'
import { Fooditems } from '../components/Fooditems'
import { AddCart } from '../components/AddCart'
import { Banner } from '../components/Banner'
import { Cheaf } from '../components/Cheaf'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'


export const Home = () => {
  return (
    <>
    
    <Navbar/>
    <Banner/>
    <Categaory/>
    <Fooditems/>
    <Cheaf/>
    <About/>
    <Contact/>
    <Footer/>
    <AddCart/>
    </>
  )
}
