import React from 'react'
import Image from "../assets/out-removebg-preview.png"

const Intro = () => {
  return (
    <>
      <div className='flex MainIntro'>
        <div className='Introduction'>
        <div>
        <h1 className='headingh1 anim'>Hi! I am <span className='spcl-txt'>Chandan Dutta</span>🙋‍♂️</h1>
            <p className='headingp anim'>I am a Frontend Web Developer.</p>
            <div className="btn anim">
                <a href='https://t.me/duttachandan'><i className="fa-brands fa-telegram"></i></a>
                <a href='https://www.facebook.com/chandan.dutt.566/'><i className="fa-brands fa-facebook"></i></a>
                <a href='https://www.linkedin.com/in/chandan-dutta-b2a778170/'><i className="fa-brands fa-linkedin"></i></a>
                <a href='https://www.instagram.com/i_am_chandan917'><i className="fa-brands fa-instagram"></i></a>
                <a href='https://github.com/duttachandan'><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-solid fa-download"></i></a>
            </div>
        </div>
        </div>
        <div className='ImgofMe'>
            <img src={Image} alt=""/>
        </div>
      </div>
    </>
  )
}

export default Intro
