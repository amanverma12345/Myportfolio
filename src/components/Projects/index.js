import React from 'react'
import styled from "styled-components"
import Projectcard from '../Cards/Projectcard';
import { projects } from '../../data/constants';

const Container = styled.div`
background: linear-gradient(
  343.07deg,
  rgba(132, 59, 206, 0.06) 5.71%,
  rgba(132, 59, 206, 0) 64.83
);
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
padding-top: 25px;
z-index: 1;
align-items: center;
clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
display: flex;
max-width: 1350px;
flex-direction: column;
justify-content: space-between;
align-items: center:
position: relative;
width: 100%
gap: 12px;
padding: 10px 0px 100px 0px;

`;

const Title = styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 20px;
color: ${({ theme })=>theme.text_primary};
@media (max-width: 768px) {
  margin-top: 12px;
  font-size: 32px;
}
`;

const Desc = styled.div`
font-size: 18px;
padding-bottom: 35px;

text-align: center;
color: ${({ theme })=>theme.text_secondary};

@media (max-width: 768px) {
  font-size: 16px;
}
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 28px;
`;

const Projects = () => {
  return <Container id="projects">
    <Wrapper>
    <Title>Projects</Title>
      <Desc>
        Here are some of the Projects on which I have worked on....
      </Desc>

      <CardContainer>
      {projects.map((project)=> <Projectcard project={project} />)}  
      </CardContainer>
    </Wrapper>
  </Container>
}

export default Projects