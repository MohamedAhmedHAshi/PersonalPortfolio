import React from 'react'
import Header from "../components/Header"
import About from "./ABOUT"
import Services from "./services"
import Contact from "./contect"
export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}
