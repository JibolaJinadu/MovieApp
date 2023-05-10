import React from 'react'
import { Link } from 'react-router-dom'

export const MovieDetails2 = () => {
  return (
    <div className="Details">
        <Link to='/'>Back to homepage</Link>
         <div className="Header">
            <h1>A New Hope</h1>
            <p>Director : George Lucas</p>
            <p>Producer : Gary Kurtz, Rick McCallum</p>
         </div>
         <div>
            <h4>Description</h4>
            <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. 
              During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to 
              destroy an entire planet. Pursued by the Empire's sinister agents, 
              Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....
            </p>
         </div>
         <div className="Section">
            <h4 class="Character-Head">Characters</h4>
            <div className="Section-list">
              <ul className='List'>
                <li>Luke Skywalker</li>
                <li>Darth Vader</li>
                <li>Beru Whitesun lars</li>
                <li>Obi-Wan Kenobi</li>
                <li>Han Solo</li>
                <li>Wedge Antilles</li>
              </ul>
              <ul>
                <li>C-3PO</li>
                <li>Leia Organa</li>
                <li>R5-D4</li>
                <li>Wilhuff Tarkin</li>
                <li>Greedo</li>
                <li>Jek Tono Porkins</li>
              </ul>
              <ul>
                <li>C-3PO</li>
                <li>Owen Lars</li>
                <li>Biggs Darklighter</li>
                <li>Chewbacca</li>
                <li>Jabba Desilijic Tiure</li>
                <li>Raymus Antilles</li>
              </ul>
            </div>
         </div>

         <div>
            <h4 className="Section">Planets</h4>
            <div className="Section-list">
                <ul >
                  <li>Tatooine</li>
                </ul>
                <ul>
                  <li>Alderaan</li>
                </ul>
                <ul>
                  <li>Yavin IV</li>
                </ul>
            </div>
         </div>
          <div>
            <h4 className="Section"> Species</h4>
            <div className="Section-list">
              <ul>
                <li>Human</li>
                <li>Rodian</li>
              </ul>
              <ul>
                <li>Droid</li>
                <li>Hutt</li>
              </ul>
              <ul>
                <li>Wookie</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="Section"> Starships</h4>
            <div className="Section-list">
              <ul>
                <li>CR90 corvette</li>
                <li>Death Star</li>
                <li>X-wing</li>
              </ul>
              <ul>
                <li>Star Destroyer</li>
                <li>Millennium Falcon</li>
                <li>TIE Advanced x1</li>
              </ul>
              <ul>
                <li>Sentinel-class landing craft</li>
                <li>Y-wing</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="Section">Vehicles</h4>
            <div className="Section-list">
              <ul>
                <li>Sand Crawler</li>
                <li>TIE/LN starfighter</li>
              </ul>
              <ul>
                <li>T-16 skyhopper</li>
              </ul>
              <ul>
                <li>X-34 landspeeder</li>
              </ul>
            </div>
          </div>
    </div>
  )
}

