import React,{useState, useEffect} from 'react'
import NavigationBar from '../HomePage/NavigationBar'
import { BsCalendarFill ,BsNewspaper ,BsLayersHalf,BsSearch} from "react-icons/bs";

import './Event.css'
import Footer from '../HomePage/Footer';
import IconList from './IconList' 
import EventList from './EventList';
import News from './News';
import Resources from './Resources';

function Event() {
    const [selected, setselected] = useState("2");
    const [data1, setData1] = useState([]);
   
    const iconList = [
        {
            id: "1",
            icon: <BsNewspaper/>,
            title: "News",
        },
        {
            id: "2",
            icon: <BsCalendarFill/>,
            title: "Event",
        },
        {
            id: "3",
            icon: <BsLayersHalf/>,
            title: "Resources",
        },
    ];
    const Modules = [
        {
            id: "1",
            module: <News/>,
            
        },
        {
            id: "2",
            module: <EventList/>,
            
        },
        {
            id: "3",
            module: <Resources/>,
            
        },
    ];

    useEffect(() => {
        switch (selected) {
          case "1":
            setData1(<News/>);
            break;
          case "2":
            setData1(<EventList/>);
            break;
          case "3":
            setData1(<Resources/>);
            break;
          
          default:
            setData1(<EventList/>);
        }
      }, [selected]);

   

    return (
        <div>
            <NavigationBar/>

            <div className='Event' >
                <div className='bag-img-parent1'>
                    <img src="Images/image3.png" className='bag-img1' />
                </div>

                <div className='img-text1'>
                    <div className='tag-line1'>
                        <p>Welcome to the</p>
                        <p>FoA NGO portal</p>
                    </div>
                    <div className='event-text'>
                        <p>We are an Globian non-profit organization that supports good causes and positive change all over the world.</p>
                    </div>
                </div>
            </div>

            <div className="event-icons--" >
            {iconList.map((d) => (
                <IconList
                    title={d.title}
                    icon={d.icon}
                    active={selected === d.id}
                    setselected={setselected}
                    id={d.id}
                    
                />
            ))}
            </div>
            <div>
                <div>
                    {data1}
                </div>
                
            </div>
            

            <Footer/>

            
            
            
        
            
        </div>
    )
}

export default Event
