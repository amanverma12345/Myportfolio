import React from "react";
import styled from "styled-components";
import './index.css';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;



const Contact = () => {
  

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities directly at <b>"av7080181848@gmail.com"</b> or using the form below !!
        </Desc>
        <form action="https://formspree.io/f/mnqedjbl" method="POST">
          <h4>Email Me :</h4>
          <input type="text" name="username" placeholder="Username" autoComplete="off" required />
          <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
          <textarea name="message" cols="30" rows="6" placeholder="Type Your Query Here..." autoComplete="off" required></textarea>
          <input type="submit" value="Send" />
        </form>
        
      </Wrapper>
    </Container>
  );
};

export default Contact;
