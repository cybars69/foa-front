import React from 'react'
import './EventList.css';
import {BsSearch} from "react-icons/bs";

function EventList() {

    const data1 = [
        {
          id: "1",
          month: "MARCH 2021",
          date: "March 4, 2021",
          time:"12:00 AM to 1:00 PM",
          campain_name:"Animal rescue awareness campaign",
          campain_description:'Animal Equality uses a broad range of strategic campaigns to ensure all animals are treated with compassion.',

        },
        {
            id: "2",
            month: "MARCH 2021",
            date: "March 4, 2021",
            time:"12:00 AM to 1:00 PM",
            campain_name:"Animal rescue awareness campaign",
            campain_description:'Animal Equality uses a broad range of strategic campaigns to ensure all animals are treated with compassion.',
        },
        {
            id: "3",
            month: "MARCH 2021",
            date: "March 4, 2021",
            time:"12:00 AM to 1:00 PM",
            campain_name:"Animal rescue awareness campaign",
            campain_description:'Animal Equality uses a broad range of strategic campaigns to ensure all animals are treated with compassion.',
            
        },
      ];

    return (
        <div className="event-block-bottom">
                <p className="NGO-Events">NGO Events</p>
                <p className="NGO-Events-para">Part of NGO Portal, see civil society & community events listed by categories and by country within the MENA region. Relevant events such as conferences, expos, meetings, trainings & workshops will all be listed here. There are currently 155 event(s) listed.</p>
                <div className="search-input-box">

                    <div className="search-box">
                        <BsSearch className="search-icon"/>
                    </div>

                    <div id="input-wraper">
                        <input name="Search by name or location" placeholder ="Search by name or location" type="text" className="search_box"/>
                        <button className="search-button">Search</button>
                        
                    </div>

                </div>
                {data1.map((d) => (
                    <div className="events">
                        <p className="Month">{d.month}</p>    
                        <div className="event1-card">
                            <div className="event1-block1">
                                <p className="date">{d.date}</p>
                                <p className="time">{d.time}</p>
                            </div>
                            <div className="event1-block2">
                                <p className="campain_name">{d.campain_name}</p>
                                <p className="campain_description">{d.campain_description}</p>
                            </div>
                            <div className="event1-block3">
                                <p className="Add_to_calendar">Add to calendar</p>
                                <button className="Register1">Register</button>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
    )
}

export default EventList
