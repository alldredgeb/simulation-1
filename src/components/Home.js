import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/shelfie_logo.png';

export default function Home() {
  return (
    // 54C - line 23 below
    // 54D - line 22 below
    // 54E - line 14 below
    // 54F - line 12 below
    // 54G - line 16 below
    // 54H - line 26 below
    // 54J - line 15 below
    // 59E - line 21 below

    <div>
      
      <header id='home_header'>
        <div className='home_header_content'>
          <div className='shelfie_logo_container'>
            <img src={logo} alt="Shelfie Logo" className='home_logo'/>
          </div>
          <div className='home_shelfie_text_container'>
            <p className='home_shelfie_text'>SHELFIE</p>
          </div>
        </div>
      </header>

      <section className='shelf_links'>
        <Link to='/shelf/A'><div className='shelf_links_background'><p className='link_text'>Shelf A</p></div></Link>
        <Link to='/shelf/B'><div className='shelf_links_background'><p className='link_text'>Shelf B</p></div></Link>
        <Link to='/shelf/C'><div className='shelf_links_background'><p className='link_text'>Shelf C</p></div></Link>
        <Link to='/shelf/D'><div className='shelf_links_background'><p className='link_text'>Shelf D</p></div></Link>
      </section>

    </div>
  )
}