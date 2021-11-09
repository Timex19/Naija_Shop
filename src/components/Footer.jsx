import Logo from '../asset/Naija Shop.png';
import styled from "styled-components";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin:0px 40px;
    padding: 20px;
    ${tablet({marginLeft: "-10px"})}
`;

const Image = styled.img`
    height: 40px;
    width: 130px;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 30px;
    ${mobile({display: "none" })}
    ${tablet({marginLeft: "-60px"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    ${tablet({width: "30vw"})}
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 30px;
    ${mobile({backgroundColor: "#fff8f8" })}
    ${tablet({marginLeft: "-20px"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Image src={Logo} alt="Naija Shop" />
                <Desc>
                    We're one of the best E-Commerce store in Africa, You can
                    order any variations of products you want and we make sure we give
                    best product you can possibly think of. We take our customer's satisfaction, as our 
                    No.1 priority and that's why we're the best.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left> 
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Mens Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tacking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms&Condition</ListItem>
                </List>
            </Center> 
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}} /> 64, Diamond Street, Surulere, Lagos, Nigeria.    
                </ContactItem>    
                <ContactItem>
                    <Phone style={{marginRight: "10px"}} /> +234 9036 987717    
                </ContactItem>    
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}} /> contact@naijashop.com    
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />   
            </Right> 
        </Container>
    )
}

export default Footer
