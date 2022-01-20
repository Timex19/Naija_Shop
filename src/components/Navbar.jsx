import React from 'react';
import styled from 'styled-components';
import { laptop, mobile } from '../responsive';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import Logo from '../asset/Naija Shop.png';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "10px"})}
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px" })} 
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Image = styled.img`
    height: 45px;
    ${mobile({height: "30px", paddingLeft: "5px" })} 
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: "2", justifyContent: "center", marginLeft: "-15px", marginRight: "-35px" })}
    ${laptop({padding: "0px 30px" })} 
`

const MenuItem = styled.div`
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    color: #1ed791;
    margin-left: 25px;
    ${mobile({fontSize: "10px", marginLeft: "8px" })}
    ${laptop({marginLeft: "15px" })}
    
    &:hover {
        padding: 10px 20px;
        background: linear-gradient(66deg, rgba(26,215,143,0.9808298319327731) 41%, rgba(0,212,255,1) 100%);
        color: white;
        border: none;
        border-radius: 50px;
        transition: all 0.5s ease;
    }
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/">
                    <Image src={Logo} alt="Naija Shop" />
                    </Link>
                </Center>
                <Right>
                    <Link to="/register" style={{textDecoration: "none"}}>
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration: "none"}}>
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
