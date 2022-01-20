import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {sliderItems} from "../data";
import { laptop, mobile, tablet } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none" })} 
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 90%;
    padding: 20px 50px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${tablet({marginLeft: "-30px" })}
    ${laptop({marginLeft: "-30px" })}
`;

const Title = styled.h1`
    font-size: 70px;
    ${tablet({fontSize: "50px" })}
`;

const Desc = styled.p`
    margin: 50px 5px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${tablet({fontSize: "15px" })}
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    background: linear-gradient(66deg, rgba(26,215,143,0.9808298319327731) 41%, rgba(0,212,255,1) 100%);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    transition: all 0.5s ease;
    ${tablet({fontSize: "15px" })}

    &:hover {
        transform: scale(1.1);
    }
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (    
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to={`/products/${item.cat}`}>
                            <Button>SHOP NOW</Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))}        
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
