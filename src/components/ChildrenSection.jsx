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
const ChildrenSection = () => {
  return (
    <Container>
       <Carousel >
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/medias/sys_master/root/20220810/hQ7X/62f359b9f997dd03e237eeba/-473Wx593H-464192514-navy-MODEL.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5  >Season Dress's</h5>
          <p>
           Get Your' Collection
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.meesho.com/images/products/165390666/fbzw5_512.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{color:"black"}}>Kid's WEAR</h2>
          <Button variant="light">View All</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://smallimg.pngkey.com/png/small/245-2450708_kids-wear-png.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{color:"black"}}> Shop now</h5>
          <p style={{color: "brown"}}>Collect Best Fashion</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
  )
}

export default ChildrenSection
