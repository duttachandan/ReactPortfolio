import Image from "../assets/IMG_20221004_200958.jpg"


const About = () => {
  return (
    <>
      <div className='UprSec flex'>
        <div>
          <h3>Available for freelance<i className="fa-solid fa-arrow-up-right-from-square"></i></h3>
          <p>Work from</p>
        </div>
      </div>
      <div className='MidSec flex'>
        <h3>Currently Working at</h3>
        <h3>Prototype Websites</h3>
        <div className="icons">
          <span><i className="fa-solid fa-arrow-down"></i></span>
          <span><i className="fa-solid fa-arrow-down"></i></span>
        </div>
      </div>
      <div className="AboutSec">
      <div className="freespace"></div>
        <div className='imagepace'>
        <img src={Image} alt="" />
        </div>
        <div className='About'>
          <p className="Aboutp"><span className='Abouth1'>About Me.</span> <br/>I have done my graduation from Gobordanga Hindu college in 2021 on B.sc Maths(H) and I am always being passionate about creating engaging and user-friendly web experiences. While I'm just starting my career , I've had the chance to gain hands on experience with the latest frontend technologies during my studies and personal projects.
          what really motivates me about frontend development is the opportunity to combine creativity with technology. I find it fulfilling to transform design concepts into interactive and visually appealing websites that user can enjoy. I'm eager to contribute my skills to a professional team and continue learning and growing as a Frontend Developer.</p>
        </div>
      </div>
      <div className='yutub'>
      <p>(Forgot to mention)</p>
        <a href="#">My youtube channel link<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </>
  )
}

export default About
