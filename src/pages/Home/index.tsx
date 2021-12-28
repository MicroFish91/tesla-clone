import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Section from "../../components/Section";
import { SECTIONS } from "./sections";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      {SECTIONS.map((section) => (
        <Section
          key={uuidv4()}
          title={section.title}
          description={section.description}
          leftBtnText={section.leftBtnText}
          rightBtnText={section?.rightBtnText}
          imgUrl={section.imgUrl}
        />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
`;
