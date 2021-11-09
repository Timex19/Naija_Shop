import React from 'react';
import styled from 'styled-components';
import { laptop, mobile } from '../responsive';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import Logo from '../asset/Naija Shop.png';

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
    ${mobile({flex: "2", justifyContent: "center" })}
    ${laptop({padding: "0px 30px" })} 
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px" })} 
`

const Navbar = () => {
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
                    <Image src={Logo} alt="Naija Shop" />
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
