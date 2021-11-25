import React, { useState, useRef, useEffect } from 'react'

import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'



const Navbar = () => {
  const [ showLinks, setShowLinks ] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);


  /* 
    Nesta 3ª solução, não definiremos o valor de altura do componente por meio de classe CSS, mas sim o método de vanilla JS getBoundingClientRect() ............
  */
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button 
          className="nav-toggle"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </button>
      </div>
     
      <div 
        className="links-container" 
        ref={linksContainerRef}
      >
        <ul 
          className="links"
          ref={linksRef}
        >
          {
            links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href="#">{text}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    
      <ul className="social-icons">
        {
          social.map((socialIcon) => {
            const { id, url, icon }
             = socialIcon;

             return (
               <li key={id}>
                 <a href={url}>{icon}</a>
               </li>  
             );
          })
        }
      </ul>
    </div>
  );
}



export default Navbar


