import React, {useState, useEffect} from 'react'
// import YtContainer from './YtContainer'

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php"

function RandomMeal({api}) {
    const [meal, setMeal] = useState(undefined)

    useEffect(  () => {
        
        async function getMeal() {
            const res = await fetch(API_URL)
            const data = await res.json()

            setMeal(data.meals[0])
        }

        getMeal()
    }, [])

    if(!meal) return null

    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strArea,
        strCategory,
        strYoutube
    } = meal;

    return (
    <>
        <div className="meal">
            <h2 className="meal-title">{strMeal}</h2>
            <div className="meal-img">
                <img src={strMealThumb} alt=""/>
            </div>
            <div className="meal-details">
                {/* <h2 className="meal-title">{strMeal}</h2> */}
                <p className="meal-instruction">
                    <p className="instruction">Instruction :</p>
                    {strInstructions + "..."}
                </p>
                <ul className="meal-info">
                    <li>
                        Category:
                        <strong>{strCategory}</strong>
                    </li>
                    <li>
                        Area:
                        <strong>{strArea}</strong>
                    </li>
                </ul>
            </div>
        </div>

        {/* <YtContainer strYoutbe={strYoutube}/> */}

        {/* `${strYoutube}` ? 
        <div className="ytContainer">
           ` <iframe width="420" height="315"
                src="https://www.youtube.com/embed?$">
            </iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${strYoutube.slice(-11)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        </div> */}
    </>
    )
}

export default RandomMeal
