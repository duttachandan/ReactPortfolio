import React, { useState } from 'react';
import Image1 from '../assets/hudu.png';
import Image2 from '../assets/ixperience.png';
import Image3 from '../assets/plug.png';
import './Project.css';

const Project = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });

  const onMouseMove = (e, index) => {
    const { top} = e.currentTarget.getBoundingClientRect();
    const x = e.screenX;
    const y = e.clientY - top;

    setCursorPosition({ top: y, left: x });
    setHoveredDiv(index); // Track the currently hovered div by its index
  };

  const onMouseEnter = () => {
    // Nothing specific to do when the cursor enters a div
  };

  const onMouseLeave = () => {
    setHoveredDiv(null); // Reset the currently hovered div when the cursor leaves
  };

  const isImageVisible = (index) => index === hoveredDiv;

  return (
    <>
      <div className='projectbox' id='project'>
        <div
          className='projectdesc'
          onMouseMove={(e) => onMouseMove(e, 0)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={()=>{
            var url = "https://duttachandan.github.io/cursor/";
            window.open(url);
          }}
        >
          <h1>Ecommerce</h1>
          <p>2023</p>
          <img
            className="Image1"
            src={Image1}
            alt=""
            style={{
              display: isImageVisible(0) ? 'block' : 'none',
              top: cursorPosition.top + 'px',
              left: cursorPosition.left + 'px',
            }}
          />
        </div>
        <div
          className='projectdesc'
          onMouseMove={(e) => onMouseMove(e, 1)}
          onMouseLeave={onMouseLeave}
          onClick={()=>{
            var url = "https://duttachandan.github.io/cursor/";
            window.open(url);
          }}
        >
          <h1>Restaurant</h1>
          <p>2023</p>
          <img
            className="Image1"
            src={Image2}
            alt=""
            style={{
              display: isImageVisible(1) ? 'block' : 'none',
              top: cursorPosition.top + 'px',
              left: cursorPosition.left + 'px',
            }}
          />
        </div>
        <div
          className='projectdesc'
          onMouseMove={(e) => onMouseMove(e, 2)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h1>Games</h1>
          <p>2023</p>
          <img
            className="Image1"
            src={Image3}
            alt=""
            style={{
              display: isImageVisible(2) ? 'block' : 'none',
              top: cursorPosition.top + 'px',
              left: cursorPosition.left + 'px',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
