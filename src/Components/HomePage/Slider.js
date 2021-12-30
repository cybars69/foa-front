import React ,{useState}from 'react'
import './Slider.css'
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          title: "“Sad little puppy with painful fracture gets happy again.”",
          desc: "When a neighbor saw a young dog who was too weak to climb out of a gutter, they called our rescue team.Sad little puppy with painful fracture gets happy again. ",
          img:"Images/123.png",
          auther:"-Vijay Saiwal",

        },
        {
          id: "2",
          title: "“Sad little puppy with painful fracture gets happy again.”",
          desc: "When a neighbor saw a young dog who was too weak to climb out of a gutter, they called our rescue team.Sad little puppy with painful fracture gets happy again. ",
          img:"Images/img1.jpg",
          auther:"-Vijay Saiwal",
        },
        {
          id: "3",
          title: "“Sad little puppy with painful fracture gets happy again.”",
          desc: "When a neighbor saw a young dog who was too weak to climb out of a gutter, they called our rescue team.Sad little puppy with painful fracture gets happy again. ",
          img:"Images/img2.jpeg",
          auther:"-Vijay Saiwal",
            
        },
      ];

    const handleClick = (way) => {
    way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <>
            <div className="slider-title">What people say about FOA </div>
            <div className='event-slider'>
                <div className='Slider'
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >

                    {data.map((d) => (
                        <div className='Container'>
                            <div className='item'>
                                <div className='left'>
                                    <div>
                                        <img src={d.img} className='slider-items' />
                                    </div>
                                    
                                </div>
                                <div className="right">
                                    <p className='eventtitle'>{d.title}</p>
                                    <p className='eventdesc'>{d.desc}</p>
                                    <p className='eventauther'>{d.auther}</p>
                                </div>
                                
                            
                            </div>
                        </div>
                    ))}

                </div>

                <img 
                    src="Images/vector-arrow.jpg" className='arrow-left'
                    alt=""
                    onClick={() => handleClick("left")} 
                />

                <img 
                    src="Images/vector-arrow.jpg" className='arrow-right'
                    alt=""
                    onClick={() => handleClick()}
                />
            </div>
        </>
    )
}

export default Slider
