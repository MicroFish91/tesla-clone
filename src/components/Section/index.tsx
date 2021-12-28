import React from "react";
import {
  ButtonGroup,
  ButtonLeft,
  ButtonRight,
  Buttons,
  DownArrow,
  ItemText,
  Wrap,
} from "./styles";

interface SectionProps {
  title: string;
  description: string;
  leftBtnText: string;
  rightBtnText: string | undefined;
  imgUrl: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  imgUrl,
}) => {
  return (
    <Wrap bgImage={imgUrl}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <ButtonLeft>{leftBtnText}</ButtonLeft>
          {rightBtnText && <ButtonRight>{rightBtnText}</ButtonRight>}
        </ButtonGroup>
        <DownArrow src={"/images/down-arrow.svg"} />
      </Buttons>
    </Wrap>
  );
};

export default Section;
