import React from 'react'
import styled from "styled-components";
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Resposive"
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const Center = styled.div`
text-align: center;
flex:1;`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;

`
const Lauguage = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "20px" })}
`
const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Lauguage>en</Lauguage>
                    <SearchContainer>
                        <Input placeholder='Search...' />
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>  
                </Left>
                <Center><Logo>Shop-on</Logo></Center>
                <Right>
                    <Link to="/register">
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login">
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default NavBar
