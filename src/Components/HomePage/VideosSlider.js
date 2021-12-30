import React ,{useState}from 'react'
import './VideosSlider.css'
function VideosSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          date: "1/8/2021",
          desc: "Be kind to everykind,not just mankind ",
          video:"https://youtu.be/YTJg8q9Q940",
        },
        {
          id: "2",
          date: "1/8/2021",
          desc: "Be kind to everykind,not just mankind",
          video:"https://youtu.be/YTJg8q9Q940",
        },
        {
          id: "3",
          date: "1/8/2021",
          desc: "Be kind to everykind,not just mankind",
          video:"https://youtu.be/YTJg8q9Q940",
            
        },
      ];

    const handleClick = (way) => {
    way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <>
            <div className='video-slider'>
                <div className='Slider1'
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >

                    {data.map((d) => (
                        <div className='Container1'>
                            <div className='item1'>
                                <div className='left1'>
                                    <div className='video-section'>
                                        <video type="video/mp4" frameborder="0" allowfullscreen="" src={d.video}  className='slider-items-videos' controls/>
                                       
                                    </div>
                                    <div className='left-details1'>
                                        <div className='blue-box1'></div>
                                        <div>
                                            <p className='eventdate1'>{d.date}</p>
                                            <p className='eventline1'>{d.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            
                            </div>
                        </div>
                    ))}

                </div>

                
            </div>

            <div className='radio-buttons' >
                <input
                    type='radio' 
                    className='radio-left'
                    alt=""
                    onClick={() => handleClick("left")} 
                />
                <input 
                    type='radio'  
                    className='middle-radio'
                    alt=""
                    onClick={() => handleClick()}
                />

                <input 
                    type='radio'  
                    className='radio-right'
                    alt=""
                    onClick={() => handleClick()}
                />
                
                    
            </div>
        </>
    )
}

export default VideosSlider
