import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavLinks(){
    return (
        <main>
            <h3>Available Rooms</h3>
            <section className='nav'>
                <NavLink to='/tea'>All About Tea</NavLink>
                <NavLink to='/plants'>Chat About Plants</NavLink>
                <NavLink to='/pets'>Fur Babies</NavLink>
                <NavLink to='/adventures'>Adventures</NavLink>
            </section>
        </main>
    )
}