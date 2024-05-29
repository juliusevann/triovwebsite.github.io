import React, { useState, useContext } from "react";
import howToUseApp from "./API/howToUse.js";
import '../src/styles/About.css'
import { Container } from './components/NavBar.jsx'



const Aboutus = () => {
  const {toggle} = useContext(Container)
  const [aboutData] = useState(howToUseApp);
  return (
    <>
    <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
    <div className="movies-container">
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                Perkenalkan kami dari Triov
              </h3>
              <h1 className="main-heading">Siapa aja sih anggotanya???</h1>

              {aboutData.map((curElem) => {
                const {id, title, image} = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <img src= {image}></img>
                      </div>
                    </div>
                  </>
              
                );
              })}
            
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">Kami juga punya slogan loh!</h3>
              <h1 className="main-heading">
                TRIOV <br /> We Make Every Effort
              </h1>

              <br />
             
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
        
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default Aboutus;