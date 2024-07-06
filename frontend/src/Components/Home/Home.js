import React from 'react'
import jp from '../../Images/jp.png'
import { Link } from "react-router-dom";
import heroImg from '../../Images/inventory.avif'
import '../Home/Home.css'
function Home() {
  return (
    <div>
      <div className='home'>
        <nav className="container d-flex">
          <div className="logo">
            <img src={jp} alt="Inventory" width={130} height={90} />
          </div>

          <div className="home-links">
            <button className="btn btn-primary text-white">
              <Link to="/signup">Register</Link>
            </button>

            <button className="btn btn-primary text-white">
              <Link className='link' to="/login">Login</Link>
            </button>
          </div>
        </nav>

        <section className="container hero">
          <div className="hero-text">
            <h2>Smart Inventory Solutions for Modern Businesses</h2>
            <p>
              Effortlessly manage stock levels and orders with our intuitive platform. Simplify logistics, enhance visibility, and drive business growth.
            </p>

            <div className="d-flex gap-5">
              <div>
                <h2>10K</h2>
                <p>Brand Owners</p>
              </div>
              <div>
                <h2>10K</h2>
                <p>Active Users</p>
              </div>
              <div>
                <h2>200+</h2>
                <p>Partners</p>
              </div>
            </div>
            <button className='start btn btn-info'>Get Started</button>
          </div>

          <div className="hero-image">
            <img src={heroImg} alt="Inventory" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
