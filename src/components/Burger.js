import React, { useState, useRef } from 'react'
import floatingBurger from '../images/floatingBurger.png'
import bgVideo from '../images/bgVideo.mp4'
import bottomBun from '../images/ingredients/bottomBun.png'
import meat from '../images/ingredients/meat.png'
import lettuce from '../images/ingredients/lettuce.png'
import onions from '../images/ingredients/onions.png'
import tomato from '../images/ingredients/tomato.png'
import eggplant from '../images/ingredients/eggplant.png'
import avocado from '../images/ingredients/avocado.png'
import topBun from '../images/ingredients/topBun.png'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Burger() {

    const mainRef = useRef();
    const navigate = useNavigate();

    const[ingredientStatus, setIngredientStatus] = useState('Selected Ingredient');
    const [visibilityStatus, setVisibilityStatus] = useState({
        topBun: false,
        eggplant: false,
        avocado: false,
        onions: false,
        tomato: false,
        lettuce: false,
        meat: false,
        bottomBun: false
    });

    const[condimentAmount, setCondimentAmount] = useState({
        mayo: 50,
        ketchup: 50,
        mustard: 50,
    });

    const handleScroll = () => {
        mainRef.current.scrollIntoView({behavior: "smooth"});
    }

  return (
    <div className="app">
    <div className='burgerApp'>
        <div className="text">
            <div className="burger-img">
                <img src={floatingBurger} alt="floating burger" />
            </div>
            <div className="text-section">
                <h1>You can now<br/><span>build your own burger.</span></h1>
                <button onClick={handleScroll}>Get Started</button>
            </div>
        </div>
        
        <video loop muted autoPlay src={bgVideo} />
    </div>

        <section className="app-content">
            <div ref={mainRef} className="left">
                {visibilityStatus.topBun ? <img id="topBun" src={topBun} alt="top bun" /> : <div></div>}
                {visibilityStatus.eggplant ? <img id="eggplant" src={eggplant} alt="eggplant" /> : <div></div>}
                {visibilityStatus.avocado ? <img id="avocado" src={avocado} alt="avocado" /> : <div></div>}
                {visibilityStatus.onions ? <img id="onions" src={onions} alt="onions" /> : <div></div>}
                {visibilityStatus.tomato ? <img id="tomato" src={tomato} alt="tomato" /> : <div></div>}
                {visibilityStatus.lettuce ? <img id="lettuce" src={lettuce} alt="lettuce" /> : <div></div>}
                {visibilityStatus.meat ? <img id="meat" src={meat} alt="meat" /> : <div></div>}
                {visibilityStatus.bottomBun ? <img id="bottomBun" src={bottomBun} alt="bottom bun" /> : <div></div>}
            </div>

            <div className="right">
                <img src={topBun} alt="top bun" onMouseEnter={() => setIngredientStatus('Top Bun')} onClick={() => setVisibilityStatus({...visibilityStatus, topBun: !visibilityStatus.topBun})} />
                <img src={eggplant} alt="eggplant" onMouseEnter={() => setIngredientStatus('Eggplant')} onClick={() => setVisibilityStatus({...visibilityStatus, eggplant: !visibilityStatus.eggplant})} />
                <img src={avocado} alt="avocado" onMouseEnter={() => setIngredientStatus('Avocado')} onClick={() => setVisibilityStatus({...visibilityStatus, avocado: !visibilityStatus.avocado})} />
                <img src={onions} alt="onions" onMouseEnter={() => setIngredientStatus('Onions')} onClick={() => setVisibilityStatus({...visibilityStatus, onions: !visibilityStatus.onions})} />
                <img src={tomato} alt="tomato" onMouseEnter={() => setIngredientStatus('Tomato')} onClick={() => setVisibilityStatus({...visibilityStatus, tomato: !visibilityStatus.tomato})} />
                <img src={lettuce} alt="lettuce" onMouseEnter={() => setIngredientStatus('Lettuce')} onClick={() => setVisibilityStatus({...visibilityStatus, lettuce: !visibilityStatus.lettuce})} />
                <img src={meat} alt="meat" onMouseEnter={() => setIngredientStatus('Meat')}  onClick={() => setVisibilityStatus({...visibilityStatus, meat: !visibilityStatus.meat})} />
                <img src={bottomBun} alt="bottom bun" onMouseEnter={() => setIngredientStatus('Bottom Bun')} onClick={() => setVisibilityStatus({...visibilityStatus, bottomBun: !visibilityStatus.bottomBun})} />
                <h1>{ ingredientStatus }</h1>

                <form>
                    <div className="form-item">
                        <div className="slider">
                            <label htmlFor="mayo">Mayo ({condimentAmount.mayo}%)</label>
                            <input id="mayo" type="range" name="mayo" min="0" max="100" value={condimentAmount.mayo} onChange={(e) => setCondimentAmount({...condimentAmount, mayo: e.target.value})} />
                        </div>

                        <button onClick={(e) => {
                            e.preventDefault();
                            setCondimentAmount({...condimentAmount, mayo: "50"})}
                            }>Default</button>
                    </div>

                    <div className="form-item">
                        <div className="slider">
                            <label htmlFor="ketchup">Ketchup ({condimentAmount.ketchup}%)</label>
                            <input id="ketchup" type="range" name="ketchup" min="0" max="100" value={condimentAmount.ketchup} onChange={(e) => setCondimentAmount({...condimentAmount, ketchup: e.target.value})} />
                        </div>

                        <button onClick={(e) => {
                            e.preventDefault();
                            setCondimentAmount({...condimentAmount, ketchup: "50"})}
                            }>Default</button>
                    </div>

                    <div className="form-item">
                        <div className="slider">
                            <label htmlFor="mustard">Mustard ({condimentAmount.mustard}%)</label>
                            <input id="mustard" type="range" name="mustard" min="0" max="100" value={condimentAmount.mustard} onChange={(e) => setCondimentAmount({...condimentAmount, mustard: e.target.value})} />
                        </div>

                        <button onClick={(e) => {
                            e.preventDefault();
                            setCondimentAmount({...condimentAmount, mustard: "50"})}
                            }>Default</button>
                    </div>
                </form>
            </div>
        </section>

        <button className="purchaseButton" onClick={() => navigate('/purchased', { state: {
            burgerStatus: visibilityStatus
        }})}>Purchase</button>
        <Footer />
    </div>
  )
}

export default Burger