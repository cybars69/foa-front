
import React ,{useState} from 'react'
import {Data} from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {FiPlus , FiMinus} from 'react-icons/fi';
import './Accordion.css'


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100px;
  background: #fff;   
  
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  margin-bottom:34px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #FFFFFF;
  color:#0B132B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 780px;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 18px;
    letter-spacing:0.1rem;
    text-transformation:capitalize;
    line-hight:1.25;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #FFFFFF;
  color: #0B132B;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 18px;
  }
`;

const Accordion = () => {
    const [clicked, setClicked] = useState(false);
  
    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
  
    return (
      <IconContext.Provider value={{ color: '#0B132B', size: '25px' }}>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <div className='accordian-boxr7476t65'>
                    <div className='blue-box5435'></div>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      
                      <h1 className='item-question645'>{item.question}</h1>
                      <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown >
                        <p className='accordion-ans'>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </div>
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    );
  };
  
  


export default Accordion

