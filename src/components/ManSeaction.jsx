import React from 'react'
import { Button, Carousel } from 'react-bootstrap';
import styled from 'styled-components';


const Container = styled.span`
    
    margin: 5px;
    width: 280px;
    height: 300px;
    display: flex;

    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  `;
const GirlSection = () => {
  return (
    <Container>
       <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/photo-handsome-male-office-worker-dressed-formal-clothes-keeps-one-hand-pocket-other-table-looks-confidently-cam-125177763.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>MEN'S WEAR</h2>
          <Button variant="light">View All</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://i.pinimg.com/236x/16/6f/c4/166fc4f34a47b7fbf20f68661fa4d9a6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>MEN'S WEAR</h2>
          <h4 style={{color:"white"}}>Collect Best Cloths</h4>
        </Carousel.Caption>
      </Carousel.Item>
       
    </Carousel>
    </Container>
  )
}

export default GirlSection
