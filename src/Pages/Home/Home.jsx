import './Home.css'

import React from 'react'

import Navbar from '../../Navbar/Navbar'


export default function Home() {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-body'>
          <h1>Property Management</h1>
          <br/>
          <h4 style={{fontWeight: 'bold'}}>For the FIRST TIME EVER in our 60-year history, Meriton is now offering property management services for ALL PROPERTIES in your property portfolio, in addition to Meriton built ones. </h4>
          <h5>Meriton Property Management manages more than 9,500 apartments across NSW and QLD.</h5>
          <br/>
          <h5>As Australia’s largest apartment developer, Meriton is the best equipped to manage, lease, and maintain the upkeep of your property to sustain the highest rental yield.</h5>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src='https://as1.ftcdn.net/v2/jpg/01/78/80/06/1000_F_178800615_6xzdt8YYrsumotkFnsq3kpDBLE9lX2JT.jpg' alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src='https://as2.ftcdn.net/v2/jpg/03/08/30/31/1000_F_308303103_4yi8JKmrXx10IGG8KAu5KKNzdBBjLkpF.jpg' alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src='https://as1.ftcdn.net/v2/jpg/03/32/67/80/1000_F_332678068_oS22qlv1yt09WxlS7MxIIXbMgHPE6FBl.jpg' alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
  )
}
