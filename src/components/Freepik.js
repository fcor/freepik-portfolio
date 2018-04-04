import React from 'react'
import logo from '../images/logo.png'
import barber from '../images/barber.jpg'
import circuit from '../images/circuit.jpg'
import fellaini from '../images/fellaini.gif'
import led from '../images/led.gif'
import megaman from '../images/megaman.jpg'
import neiva from '../images/neiva.jpg'
import pokemon from '../images/pokemon.jpg'
import tmnt from '../images/tmnt.jpg'

const images = [pokemon, fellaini, megaman, led, circuit, barber, tmnt, neiva]

const Freepik = () =>
  <div className="container">
    <Header />
    <Content />
    <div className="redes">
      Redes
    </div>
    <footer>
      Footer
    </footer>
  </div>

const Header = () =>
  <header className="header">
    <img src={logo} width="106" height="158" alt="logo" />
  </header>

const Content = () =>
  <div className="content">
    <Text />
    <Grid />
  </div>

const Text = () =>
  <div className="text-freepik">
    <p className="title-freepik">Freepik Portfolio</p>
    <p className="p-freepik">
      Hi! My name is <strong>Daniel Vanegas</strong>, I'm a graphic designer from Colombia, recently I have been working
      on icons and flat designs. I saw the chance of working remotely with you and I decided to apply. I hope you like it
    </p>
  </div>

const Grid = () =>
  <div className="grid-freepik">
    {images.map((item) =>
      <img src={item} alt="img" width="261"  height ="227" key={item}/>
    )}
  </div>

export default Freepik
