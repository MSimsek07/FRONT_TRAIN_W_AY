import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rampart+One&display=swap")
      font-family: "Rampart One",
    cursive;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  width: 400px;
  height: 200px;
  background-image: linear-gradient(
    to left top,
    #2c0205,
    #38090e,
    #451014,
    #521818,
    #5f201b,
    #6b271e,
    #762f20,
    #823722,
    #8f4124,
    #9b4b24,
    #a75625,
    #b36225
  );
  border-radius: 10px;
  padding: 10px;
`;
//quote-area
const QuoteArea = styled.div`
  font-size: 22px;
  align-items: center;
  display: flex;
`;
const Quote = styled.p`
  font-size: 16px;
  align-items: center;
  color: #ffffff;
  margin-right: 30px;
  padding: 5px;
`;
//film

const Span = styled.span`
  font-style: italic;
  margin-top: 150px;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;

const quote = () => {
  return (
    <Wrapper>
      <QuoteArea>
        <Span>FILM</Span>
        <Quote>
          " Lnde itaque expedita maxime veniam architecto quos vitae natus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit sdklnflzkdng
          dlkfngldfg lşkxdmfgd fzsldkmfn zlskdmf. "
        </Quote>
      </QuoteArea>
    </Wrapper>
  );
};

export default quote;
