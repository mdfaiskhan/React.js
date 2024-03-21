import React from 'react'
import "./FirstStyle.css"
import intro from "../assests/intro.jpg"
import { Link } from 'react-router-dom'



const First = () => {
  return (
    <div class="First-page">
        <div class="container-1">
            <div class="left-1">
                <div>
                     <p class="font1">Hi, I'm Mary Ateer</p>
                     
                     <h1 class="font2">DESIGNER</h1>
                    
                     <p class="font3">I love to work in UI/UX designng. I always try my best to<br/> make good UI with the best UX.</p>
                      <br/>
                        <button type="button" class="button-1"><Link to="/about"> Hire Me</Link></button>
                    </div>
            </div>
          
        </div>
    </div>
  )
}

export default First
