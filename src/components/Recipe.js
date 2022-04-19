import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import cookingVideo from '../images/cookingVideo.mp4'
import { useLocation } from 'react-router-dom';

function Recipe() {

    const location = useLocation();
    const videoRef = useRef();

    const[meal, setMeal] = useState('');
    const[linkID, setLinkID] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${location.state.mealID}`)
            .then((res) => {
                setMeal(res.data.meals[0])

                const youtubeID = res.data.meals[0].strYoutube;
                setLinkID(youtubeID.slice(32))
            }).catch((err) => {
                console.log(err)
            })
    }, [location.mealID])

    const handleScroll = () => {
        videoRef.current.scrollIntoView({behavior: "smooth"});
    }

  return (
    <div>
        <div className="mealInfo">
            <div className="mealImage">
                <img src={ meal.strMealThumb } alt="meal image" />
            </div>

            <div className="mealText">
                <h1>{ meal.strMeal }</h1>
                <h2>Area: { meal.strArea }</h2>
                <h2>Category: { meal.strCategory }</h2>
                <h2>Type: { meal.strTags }</h2>
                <h2>{`Ingredients: ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}`}</h2>

                <h1>Instructions</h1>
                <p>{ meal.strInstructions }</p>

                <button onClick={handleScroll}>Watch Video</button>
            </div>
        </div>

        <section className="recipe-video" ref={videoRef}>
            <video src={cookingVideo} autoPlay muted loop></video>

            <div className="main-vid">
                <h1>Recipe Video</h1>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${linkID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>
    </div>
  )
}

export default Recipe