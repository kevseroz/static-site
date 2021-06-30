import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
<div className="site-footer">
    <h4 className="text-center mb-5 mt-5">İletişim</h4>
    <p><u>Adres: </u>lorel iipsum dolor sit amet lorem ipsum No: 15</p>
    <p><u>Telefon: </u> 123 456 78 90</p>
    <h4 className="text-center mb-5 mt-5">Bizi Sosyal Medyada Takip Edin</h4>
    <div className="footer-social-links">
        <ul className="social-links-list">
            <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                <FontAwesomeIcon icon={faFacebook} size= '2x' />
            </a>
            </li>
            <li className="social-links-list">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size= '2x' />
            </a>
        </li>
        <li className="social-links-list">
             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter" >
                 <FontAwesomeIcon icon={faTwitter} size= '2x' />
            </a>
        </li>
        <li className="social-links-list">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram" >
                <FontAwesomeIcon icon={faInstagram} size= '2x' />
            </a>
        </li>
        </ul>
    </div>
</div>
)

export default Footer