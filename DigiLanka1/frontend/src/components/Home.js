import React from "react";
import './home.css'
import './hstyle.css'


function Home(){
    return(
        <div style={{ background: "url('/back3.jpg')" , height: '100vh'}} >
        {/* <div className="container">
          <nav>
            <div className="webname">Online Teacher Trainer</div>
            <input type="checkbox" id="btn" />
            <label htmlFor="btn" className="check">!!!</label>
            <input type="submit" id="submit" value="Q" />
            <input type="search" id="search" placeholder="search Content" />
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="courses.html">CONTENT</a></li>
              <li><a href="contact.html">CONTACT US</a></li>
              <li><a href="pro.html">PROFIEL</a></li>
              <li><a href="Login.html"><i className="fa-solid fa-user-tie"></i> Log in</a></li>
              <li><a href="registration page.html"><i className="fa-solid fa-user-plus"></i> Sign Up</a></li>
            </ul>
          </nav>
        </div> */}

        <div className="Section_top">
          <div className="content">
            <h1 >Digi <br /><span>Lanka</span></h1>
            <br />
            <a href="/bc/">Birth Certificate</a>
            <a href="/nic/allPeople">NIC</a>
            <a href="/medical/">Medical Certificate</a>
            <a href="/driver/">Licence</a>
            <a href="/passport/">Passport</a>
            <a href="/dc/dc">Death Certificate</a>
          </div>
        </div>
        </div>
    )
}

export default Home;