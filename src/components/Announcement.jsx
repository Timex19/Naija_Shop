import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background: rgb(26,215,143);
    background: linear-gradient(66deg, rgba(26,215,143,0.9808298319327731) 41%, rgba(0,212,255,1) 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free shipping on Orders over $50
        </Container>
    )
}

export default Announcement
