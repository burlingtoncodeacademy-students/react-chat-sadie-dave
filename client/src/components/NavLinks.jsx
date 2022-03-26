import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import adOne from "./img/Ad1.jpg"
import adTwo from "./img/Ad2.jpg"
import adThree from "./img/Ad3.jpg"
import adFour from "./img/Ad4.jpg"

export default function NavLinks(){

    let adsArray = [
        adOne,
        adTwo,
        adThree,
        adFour,
      ];
    
      const [ad, setAd] = useState(adsArray[0]);
    
      const [count, setCount] = useState(0);
    
      function adsSetter() {
        if (count === adsArray.length - 1) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
    
        setAd(adsArray[count]);
    
        clearInterval(clear);
      }
    
      let clear = setInterval(adsSetter, 5000);



    return (
        <main>
            <div className='roomsContainer'>
            <h3>Available Rooms</h3>
            <section className='nav'>
                <NavLink className="links" to='/tea'>All About Tea</NavLink>
                <NavLink className="links" to='/plants'>Chat About Plants</NavLink>
                <NavLink className="links" to='/pets'>Fur Babies</NavLink>
                <NavLink className="links" to='/adventures'>Adventures</NavLink>
            </section>

            <section>
                <div className="ad">
                    <img src={ad} width='90%' height='90%'></img>
                </div>
            </section>

            </div>
        </main>
    )
}