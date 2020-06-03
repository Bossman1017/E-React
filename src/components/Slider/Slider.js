import React, { useState } from 'react';
import '../Slider/Slider.scss';
import ImgComp from './ImgComp';
import i1 from '../../slide-img/dbfight.jpg'
import i2 from '../../slide-img/mk11after.jpg'
import i3 from '../../slide-img/re7.jpg'
import i4 from '../../slide-img/sfchamp.jpg'
import i5 from '../../slide-img/supersmash.jpeg'
import i6 from '../../slide-img/DefJam.jpg'
function Slider() {
    //let's create an array for component to show inside the slider
    let sliderArr = [<ImgComp src={i1}/>,
         <ImgComp src={i2}/>, 
         <ImgComp src={i3}/>,
          <ImgComp src={i4}/>,
          <ImgComp src={i5}/>,
          <ImgComp src={i6}/>]; //just numbers for now
    const [x, setX] = useState(0);
    const goLeft = () => {
        console.log(x)
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        console.log(x);
        //sliderArr.length was used so the input can be dynamic
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    };
    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeft" onClick={goLeft}>Get Some Game</button>
            <button id="goRight" onClick={goRight}>Get Some Game</button>
        </div>
    );
}

export default Slider;