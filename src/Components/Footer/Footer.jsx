import React from 'react'

import { Divider } from '@mui/material'

import './Footer.css'


const Footer = () => {
  return (
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">

            <div className="footer-about">
              <h4 style={{ marginBottom:'10px'}}>About us</h4>
              <ul>
                <div className="footer-menu">
                  <li>
                    <a>Property Development</a>
                  </li>
                  <li>
                    <a>Rental Apartments</a>
                  </li>
                  <li>
                    <a>Commercial and Retail</a>
                  </li>
                  <li>
                    <a>Awards & Recognition</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="footer-service">
              <h4 style={{ marginBottom:'10px' }}>Our Services</h4>
                <ul>
                  <div className="footer-menu">
                    <li>
                      <a>Finance Services</a>
                    </li>
                    <li>
                      <a>Property Management</a>
                    </li>
                    <li>
                      <a>Parking Services</a>
                    </li>
                    <li>
                      <a>Resales</a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className="footer-contact">
              <h4 style={{ marginBottom:'10px' }}>Contact Us</h4>
                <ul>
                  <div className="footer-menu">
                    <li>
                      <a>Finance Services</a>
                    </li>
                    <li>
                      <a>Property Management</a>
                    </li>
                    <li>
                      <a>Parking Services</a>
                    </li>
                    <li>
                      <a>Resales</a>
                    </li>
                  </div>
                </ul>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-logo">
              <h1>LOGO</h1>
            </div>
          </div>
        </div>
        <Divider />
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-policy">
              Privacy and Policy
            </div>
            <div className="footer-disclaimer">
              Disclaimer
            </div>
            <div className="footer-sitemap">
              Sitemap
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-copyright">
                Copyright © All Rights Reserved
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer