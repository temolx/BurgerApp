import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function MealList() {
  
    const navigate = useNavigate();

    const[meals, setMeals] = useState([]);
    const[mealInfo, setMealInfo] = useState([])
    const[userInput, setUserInput] = useState('');
  
    useEffect(() => {
      const apiAddress = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`;
      // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

      axios.get(apiAddress).then((res) => {
        setMeals(res.data.meals)
      }).catch((err) => {
        console.log(err)
      })

    }, [userInput])
  
    const handleInput = (e) => {
      setUserInput(e.target.value)
    }

    const showInfo = (index, id) => {
        document.getElementsByClassName('orangeBG')[index].style.display = 'flex';

        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          setMealInfo(res.data.meals[0])
          console.log(res.data.meals[0])
        }).catch((err) => {
          console.log(err)
        })
    }

    const hideInfo = (index) => {
        document.getElementsByClassName('orangeBG')[index].style.display = 'none';
    }

    return (
        <div>
      <header>
        <input type="text" placeholder="Enter an ingredient" onChange={(e) => handleInput(e)} />
        <h1 className="resultsTitle">Your Search Results:</h1>
      </header>

      <section className="food-list">
        {meals.filter((element) => {
            if (userInput === '') {
                return element;
            }
            else if (element.strMeal.toLowerCase().includes(userInput.toLowerCase())) {
                return element;
            }
        }).map((meal, index) => (
          <div className="meal-list" key={ meal.idMeal } >
            <div className="image-container" onMouseEnter={() => showInfo(index, meal.idMeal)} onMouseLeave={() => hideInfo(index)} onClick={() => navigate("/recipe", {state: {mealID: meal.idMeal}})}>
                <div className="orangeBG">{ mealInfo.strArea + ", " + mealInfo.strCategory }</div>
                <img src={ meal.strMealThumb } alt="meal image"/>
            </div>

            <h1 className="mealName">{ meal.strMeal }</h1>
            <button className="recipeButton" onClick={() => navigate("/recipe", {state: {mealID: meal.idMeal}})}>Get Recipe</button>
          </div>
        ))}
      </section>

      <Footer />
    </div>
    )
}

export default MealList
