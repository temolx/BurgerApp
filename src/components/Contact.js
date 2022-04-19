import React from 'react'
import contactVideo from '../images/contactVideo.mp4'

function Contact() {
  return (
    <div className="contact-page">
        <form>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="email" placeholder='Email' />
            <input type="tel" placeholder='Phone' />
            <input type="submit" />
        </form>

        <video src={contactVideo} autoPlay loop muted />
    </div>
  )
}

export default Contact