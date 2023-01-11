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
          src="https://img.freepik.com/free-photo/young-attractive-dark-haired-woman-with-short-haircut-with-lot-shopping-bags_295783-12462.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WOMEN,S WEAR</h3>
          <Button variant="light">View All</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/t/g/w/m-ut-3006-aask-original-imag7xssme44aynm-bb.jpeg?q=70"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5> Shop now</h5>
          <p>Collect Best Fashion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/image/832/832/kt0enww0/dress/p/x/x/xxl-1091-sheetal-associates-original-imag6g4nj8dys6sy.jpeg?q=70"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Season Dress's</h5>
          <p>
           Get Your' Collection
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default GirlSection
