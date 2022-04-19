import React from 'react'
import fbIcon from '../images/fbIcon.png'
import ytIcon from '../images/ytIcon.png'
import twitterIcon from '../images/twitterIcon.png'
import instaIcon from '../images/instaIcon.png'

function Footer() {
  return (
    <footer>
        <h1>Contact</h1>
        <form>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="email" placeholder='Email' />
            <input type="tel" placeholder='Phone' />
            <input type="submit" />
        </form>

        <ul>
            <li><img src={instaIcon} alt="instagram icon"/></li>
            <li><img src={twitterIcon} alt="twitter icon"/></li>
            <li><img src={ytIcon} alt="youtube icon"/></li>
        </ul>
    </footer>
  )
}

export default Footer