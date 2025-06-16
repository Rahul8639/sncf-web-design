import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/mandal logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id='footer-container'>
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='footer-section'>
            <h2>Quick Links</h2>
            <nav className='footer-links'>
              <Link to='/contact'>Contact <i className="ri-arrow-right-up-line"></i></Link>
              <Link to='/social-media-guidelines'>Social Media Guidelines <i className="ri-arrow-right-up-line"></i></Link>
              <Link to='/privacy-policy'>Privacy Policy <i className="ri-arrow-right-up-line"></i></Link>
              <Link to='/terms-of-service'>Terms of Service <i className="ri-arrow-right-up-line"></i></Link>
            </nav>
          </div>
          <div className='footer-social'>
            <h2>Connect With Us</h2>
            <div className='social-icons'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <i className="ri-instagram-fill"></i>
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
                <i className="ri-twitter-fill"></i>
              </a>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className='footer-middle'>
          <div className='footer-section'>
            <h2>Useful Links</h2>
            <nav className='footer-links'>
              <Link to='/awards'>Awards and Honors <i className="ri-arrow-right-up-line"></i></Link>
              <Link to='/partners'>Our Partners <i className="ri-arrow-right-up-line"></i></Link>
              <Link to='/contributions'>Foreign Contributions <i className="ri-arrow-right-up-line"></i></Link>
              <Link to='/contribute'>Contribute <i className="ri-arrow-right-up-line"></i></Link>
            </nav>
          </div>
        </div>

        <div className='footer-right'>
          <div className='footer-logo'>
            <img src={logo} alt='SNCF Logo' />
          </div>
          <div className='footer-copyright'>
            <p>
              All Rights Reserved by
              <br />
              Sant Nirankari Charitable Foundation
              <br />
              © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer