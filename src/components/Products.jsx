import styled from "styled-components";
import { KidsProducts, popularProducts } from "../data";
import GirlSection from "./GirlSection";
import ManSection from "./ManSeaction";
import Product from "./Product";
import { BoysProducts } from "../data";
import ChildrenSection from "./ChildrenSection";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

const Products = () => {
  return (
    <>
    <Container>
    <GirlSection/>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    <Container>
    <ManSection/>
      {BoysProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    <Container>
    <ChildrenSection/>
      {KidsProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Products;
