import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import{Routes, Route, NavLink} from 'react-router-dom'
import Movie from './Movie'
import TvShows from './TvShows'
import About from './About'
import '../styles/NavBarStyle.css'

export const Container = React.createContext()

function NavBar() {
  const [toggle, setToggle] = useState(true)
  const [inputValue, setInputValue] = useState ('')
  return (
    <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
      <nav className={toggle ? '' : 'navBarColor'}>
        <div className='nav-options'>
          <h1 id={toggle ? '' : 'heading'}>TRIOV</h1>
          <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
          </NavLink>
          <NavLink to="/TvShows" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>TvShows</span>
          </NavLink>
          <NavLink to="/About" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>About</span>
          </NavLink>
        </div>
        <div className="input-group">
        <input type="text" placeholder='Search WhatEver You Want' onChange={(e) => setInputValue(e.target.value)}/>
        <HiSearch fontSize={21} color="black" id='search' />
        <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
          <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
        </div>
        </div>
      </nav>
      <Routes>
        <Route path='' element={<Movie />}/>
        <Route path='TvShows' element={<TvShows />}/>
        <Route path='About' element={<About />}/>
      </Routes>
    </Fragment> 
    </Container.Provider>
  )
}

export default NavBar
