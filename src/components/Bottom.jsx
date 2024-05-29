import React from "react"
import "../styles/footer.css"

const Bottom = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <p>© 2023 TRIOV.  Semester Project that was only developed in less than 1 week. The app was only developed by 3 people.</p>
          </div>
          <div className='box2'>
            <h3>Follow Us</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box3'>
            <h3>TRIOVAPP</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Bottom