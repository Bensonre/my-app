import React from 'react';
import {
    NavLink,BrowserRouter
  } from 'react-router-dom';

export default function NavBar() {
    return(<nav>
        <div className="line"/>
        <div className='links'>
            <div>
                <NavLink to='/' style={{color: 'rgb(255,124,97)'}}>Home</NavLink>
            <div className="underline" style={{backgroundColor: 'rgb(255,124,97)'}}/>
            </div>
            <div>
            <NavLink to='/Resume' style={{color: 'rgb(255,161,0)'}}>Resume</NavLink>
            <div className="underline" style={{backgroundColor: 'rgb(255,161,0)'}}/>
            </div>
            <div>
            <NavLink to='/Projects'style={{color: 'rgb(109,206,174)'}}>Personal Projects</NavLink>
            <div className="underline" style={{backgroundColor: 'rgb(109,206,174)'}}/>
            </div>
            <div>
            <NavLink to='/Art' style={{color: 'rgb(112,81,101)'}}>Art</NavLink>
            <div className="underline" style={{backgroundColor: 'rgb(112,81,101)'}}/>
            </div>
        </div>
    </nav>);
}
/*
<NavLink exact to="/">Home</NavLink>
            <NavLink to="/Resume">Resume</NavLink>
            <NavLink to="/projects">Personal Projects</NavLink>
            <NavLink to="/ART">Art Works</NavLink>
        
*/