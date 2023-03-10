import { ManageSearch } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../globalstyle.js';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--primary-color);
    z-index: 4;
    ${mobile({ 
        position: "fixed", 
        bottom: 0,
        width: "100%", 
        height: "50px",
        backgroundColor: "var(--primary-color)",
    })}

`;
const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    ${mobile({ 
        padding: "10px 0px", 
    })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ 
        display: "none", 
    })}   
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 28px;    
    ${mobile({ fontSize: "24px" })}
    ${tablet({ fontSize: "3dvw" })}
`;

const Slogan = styled.h1`
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
    white-space: nowrap;
    ${mobile({ fontSize: "24px" })}
    ${tablet({ fontSize: "3dvw" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ 
        display: "none", 
    })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
  margin-left: 0;
  border-radius: 10px;
  padding: 0px 10px;
  background-color: var(--off-white);
  height: 30px;
  width: 60%;
`;

const SearchIconContainer = styled.div`
  padding-top: 2px;
`;

const Input = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  margin-left: 10px;
  width: 100%;
`;


const Navbar = () => {
    return (
        <Container id="NavBar">
            <GlobalStyle/>
            <Wrapper>
                <Left>
                  <Title>GOurmet</Title>
                </Left>
                <Right>
                  <Slogan>Your guide to great eats and stays!</Slogan>
                  <SearchContainer>
                    <SearchIconContainer>
                      <ManageSearch/>
                    </SearchIconContainer>
                    <Input/>
                  </SearchContainer>

                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;