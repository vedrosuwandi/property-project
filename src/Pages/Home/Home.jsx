import './Home.css'

import React from 'react'
import { Divider, TextField, Button } from '@mui/material'


import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


export default function Home() {
  return (
    <div className='home-container'>
        <div className="home-nav">
          <Navbar />
        </div>
        <div className='home-body'>
        <div className="home-carousel">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
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
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="home-contents">
          <div className="home-content-title">
            <h1 style={{fontWeight: 'bold', marginBottom:'2rem'}}>
              Property Management
            </h1>
            <Divider 
              variant='middle' 
              sx={{ 
                bgcolor: "yellow", 
                borderBottomWidth: 5,
                margin: '0px 20% 0px 20%'
              }}
              
            />
          </div>
          <div className="home-content">   
            <h4>
              For the FIRST TIME EVER in our 60-year history, Meriton is now offering property management services for ALL PROPERTIES in your property portfolio, in addition to Meriton built ones. 
            </h4>
            <h5>
              Meriton Property Management manages more than 9,500 apartments across NSW and QLD.
            </h5>
            <br/>
            <h5>
              As Australia’s largest apartment developer, Meriton is the best equipped to manage, lease, and maintain the upkeep of your property to sustain the highest rental yield.
            </h5>
          </div>
          </div>
          <div className="home-mail">
            <div className="home-mail-container">
              <div className="home-mail-title">
                <h4>Join Our Mailing List</h4>
              </div>
              <form>
                <div class="form-row">
                  <div class="col">
                    <TextField id="standard-basic" label="First Name" variant="standard" fullWidth />
                  </div>
                  <div class="col">
                    <TextField id="standard-basic" label="Last Name" variant="standard" fullWidth/>
                  </div>
                </div>
                <div className="form-email">
                  <TextField id="standard-basic" label="Email" variant="standard" fullWidth />
                </div>
                <div class="form-row">
                  <div class="col">
                    <TextField id="standard-basic" label="Phone Number" variant="standard" fullWidth />
                  </div>
                  <div class="col">
                    <TextField id="standard-basic" label="Inquiry" variant="standard" fullWidth/>
                  </div>
                </div>
                <div className="form-interest">
                  <h6>I am Interested In</h6>
                  <div className="form-interest-choice">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                      <label class="form-check-label" for="inlineCheckbox1">Buy</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                      <label class="form-check-label" for="inlineCheckbox1">Rent</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                      <label class="form-check-label" for="inlineCheckbox1">Retail</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                      <label class="form-check-label" for="inlineCheckbox1">Other</label>
                    </div>
                  </div>
                </div>
                <div className="form-privacy">
                  Privacy Policy
                </div>
                <div className="form-submit">
                  <Button variant="contained" style={{backgroundColor:'gold' , padding:'15px 50px 15px 50px' , borderRadius:'0px'}}>SUBMIT</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="home-footer">
            <Footer />
          </div>
        </div>
      </div>
  )
}
