import React, { useEffect } from 'react';
import Icon from './MeLogo.js';
import NavBar from './NavBar.js';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch
} from 'react-router-dom';

function Projects() {
  return (<div className="content">
    Comming Soon...
         </div>);
}

function Art() {
  return (
  <div className="content flex vert-center" >
    <section className='Bais-1 flex flex-row'>
    <div className="artContainer">
        <img  className="w-20vw onLoad" src="Nicole Skeleton final Art submission.jpg"/>
      </div>
      <div className="artContainer">
        <img className="w-20vw onLoad" src="Liam Art final submission.jpg"/>
      </div>
      <div className="artContainer">
        <img  className="w-20vw onLoad" src="Final Images 2.jpg"/>
      </div>
    </section>
    <section className='Bais-1 flex flex-row'>
    <div className="artContainer">
        <img  className="w-20vw onLoad" src="Couple Art Finale Submission.jpg"/>
      </div>
      <div className="artContainer">
        <img  className="w-20vw onLoad" src="karleefix attempt.jpg"/>
      </div>
      <div className="artContainer">
        <img  className="w-20vw onLoad" src="Final Images 1.jpg"/>
      </div>
    </section>
    <section className='Bais-1 flex flex-row'>
    <div className="artContainer">
        <img  className="w-20vw onLoad" src="nicky painting.jpg"/>
      </div>
      <div className="artContainer">
        <img className="w-20vw onLoad" src="sparkyfinal.jpg"/>
      </div>
      <div className="artContainer">
        <img  id='finale-img' onLoad={() => {
           var  x = document.images;
           const imgList = Array.from(x);
           imgList.shift();
           imgList.forEach(element => {
              element.classList.remove('onLoad');
              element.classList.add('seen')
           });
  }} className="w-20vw onLoad" src="Final Images 3.jpg"/>
      </div>
    </section>
  </div>);
}

function Resume() {
  return (<div className="content">

    <section>
      <h2>
        Computer Scientist
            </h2>
      <div>
        916-200-8210 | 124 NW 7th street Corvallis, Oregon | ReeseABenson@gmail.com | https://www.Linkedin.com/in/reese-benson-6a21b6172
            </div>
    </section>
    <section className="flex inner-text">
      <section className="Bais-1">
        <section>
          <h3>Profile</h3>
          <div>
            Driven, curious and enthusiastic computer science student, with a solid foundation in programming logic, data structures, mathematics, and physics. Seeking to utilize skills in collaboration, communication, creativity, and visual design as a programmer.
              </div>
        </section>
        <section>
          <h3>Experience</h3>
          <section>
            <h4>
            <div>
              Center for Applied Systems and Software, OSU
          </div>
          <div>
              2018-Current | Junior Developer
          </div>
              </h4>
            <div>
            I worked in a team of developers to create full-stack restful applications for the web, created training for other developers, and
            helped interview candidates. The two projects I spent the most time on were the Smarter Balance project and Oregon State Construction 
            Contractors Board Falcon project. During the Smarter Balance project, I worked predominately on the front end of the React application during 
            the last four months of development. My most common responsibility was ensuring our product looked like the mock, both on desktop and mobile. 
            Currently, I work on the unfinished OSCCB Falcon project as one of the two student leads. I have been responsible for architecture decisions, 
            database design, and implementing views, controllers, and microservices in the ASP.NET Core framework.
            </div>
          </section>
          <section>

            <h4>
            <div>
          Voyent Technologies
          </div>
          <div>
          2016 | Student Intern
          </div>
          </h4>
            <div>
            At Voyent Technologies I learn to Test search and Test for Bugs in Live React web application. I also learned and used automated testing suites. 
            The bugs I Identified reported to my superiors and on several occasions, I assisted in the implementation of the bug fix
            </div>
          </section>
        </section>
        <section>
          <h3>
          References
          </h3>
          <section>
            <h4>
              <div>
            Matthew Arck | Senior Developer
            </div>
            <div>
            Center for Applied Systems and Software
            </div>
            </h4>
            <div>
            Work Phone: 541-737-260
            Email: Mattew.Arck@oregonstate.edu
            </div>
          </section>
        </section>
      </section>
      <section className="Bais-1 ml-5vmin">
        <section>
          <h3>Education</h3>
          <section>
          <h4>
            <div>
            Oregon State University | June 2020
            </div>
            <div>
            Bachelors Degree in Computer Science
          </div>
          <div>
            Minor in Studio Art
          </div>
          <div>
            GPA: 3.72
          </div>
          </h4>
          </section>
        </section>
        <section>
          <h3>
              Personal Accomplishments
          </h3>
          <ul>
            <li>
            I am a Founding Father of The Delta Lambada Chapter of Delta Tau Delta and Have held office in several Executive and Administrative Positions. Including Risk Manager, Director of Academic Afairs, and Community Service Chairman.
            </li>
            <li>
            I enjoy making personal video games, board games, animating and writing in my free time. These passion projects are a fun way for me to unwind. My favorite video game I have made is a small pokemon emulater with 10 monsters and a small map to roam around and have random encounters.
            </li>
            <li>
            I have sold Art works and created T-shirts, UI/UX, and Logo Designs for both personal and Professional use.
            </li>
            <li>
            I am a Chirstian man, and God has used on many mission trips to help serve the less furtunate. These trips included 4 mexico mission trips where we built houses for those in need where I eventually became a site build leader, multiple state side trips, and a 3 month long mission to Russia.
            </li>
          </ul>
        </section>
        <section>
          <h3> Technical Skills</h3>
          <h4>
          <div>
          C#				★★★★☆
          </div>
          <div>
Asp.Net 			★★★★☆
          </div>
          <div>
C,C++				★★★★☆
          </div>
          <div>
HTML5				★★★★☆
          </div>
          <div>
CSS				★★★★☆
          </div>
          <div>
JavaScript 			★★★☆☆
          </div>
          <div>
React 				★★★☆☆
          </div>
          <div>
SQL				★★★☆☆
          </div>

          </h4>
        </section>
        <section className="center-text">
          <a href="/ReeseBensonResume.pdf" download>
          <button>Download Pdf</button>
          </a>
        </section>
      </section>
    </section>


  </div>);
}

function Home() {
  return (<div className="content">
    A driven, creative software and web developer with a passion for UI/UX design and software engineering.
           </div>);
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="logo-container logoBackground">
            <Icon />
          </div>
          <h1>Reese Benson</h1>
          <NavBar />
        </header>
        <Switch>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Art">
            <Art />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/home">
            <Redirect  to="/"/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <footer className="flex SpaceBetween">
          <div>
            Built with React and Hosted on Github Pages
          </div>
          <div>
            &copy  2020
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
