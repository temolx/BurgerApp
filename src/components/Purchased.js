import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import bunGif from '../images/gifs/bunGif.gif'
import veganGif from '../images/gifs/veganGif.gif'
import OnionsGif from '../images/gifs/OnionsGif.gif'
import AvocadoGif from '../images/gifs/AvocadoGif.gif'
import MasterChef from '../images/gifs/MasterChef.gif'
import Footer from './Footer'

function Purchased() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(handleTimeout, 4000)
    }, [])

    const handleTimeout = () => {
        navigate('/');
    }
    

    if (!location.state.burgerStatus.topBun || !location.state.burgerStatus.bottomBun) {
    return (
        <section>
        <div className='purchasedPage'>
            <h1>Thank you for your purchase.</h1>
            <h2>A burger WITHOUT A BUN? ok 🤡</h2>
            <img src={bunGif} alt="idiot sandwich gif" />
        </div>

        <Footer />
        </section>
    )
    }

    else if (!location.state.burgerStatus.meat) {
        return (
            <section>
            <div className='purchasedPage'>
                <h1>Thank you for your purchase.</h1>
                <h2>Yum... Vegan food 😖</h2>
                <img src={veganGif} alt="vegan food gif" />
            </div>

            <Footer />
            </section>
        )
    }

    else if (location.state.burgerStatus.onions) {
        return (
            <section>
            <div className='purchasedPage'>
                <h1>Thank you for your purchase.</h1>
                <h2>🧅 Your breath must be great 😷</h2>
                <img src={OnionsGif} alt="ad breath gif" />
            </div>

            <Footer />
            </section>
        )
    }

    else if (location.state.burgerStatus.avocado) {
        return (
            <section>
            <div className='purchasedPage'>
                <h1>Thank you for your purchase.</h1>
                <h2>🥑 So... creative?! 🥑</h2>
                <img src={AvocadoGif} alt="fruits gif" />
            </div>

            <Footer />
            </section>
        )
    }

    else {
        return (
            <section>
            <div className='purchasedPage'>
                <h1>Thank you for your purchase.</h1>
                <h2>👨‍🍳 MasterChef energy 👨‍🍳</h2>
                <img src={MasterChef} alt="crying kid flipping meat gif" />
            </div>

            <Footer />
            </section>
        )
    }
}

export default Purchased