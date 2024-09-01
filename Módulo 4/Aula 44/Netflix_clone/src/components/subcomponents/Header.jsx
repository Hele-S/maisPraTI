import styled from "styled-components"
import { useState } from "react";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #e50914;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  color: #333;
  opacity:${(props) => (props.show ? '1' : '0')};
`;
const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
 position:relative;
 overflow:hidden;
 border-radius: 20px;
 transform: translateX(50%);
 display:flex;
 justify-content:center;
`
const InputSearch = styled.input`
position:relative;
 height: 40px;
 padding: 0 15px;
 width: 100%;
  border-radius: 20px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  transform: ${(props) => (props.show ? '' : 'translateX(100%)')};
  /* opacity: ${(props) => (props.show ? '1' : '0')}; */
  transform-origin: right;


  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #e50914;
    background-color: #444;
  }
`

const Header = () => {
    const [searchState, setSearchState] = useState(false)

    const searchStateSwitch = () => {
        setSearchState(!searchState)
    }
    return (
        <>
            <HeaderDiv>
                <Logo >NETFLIX</Logo>
                <InputContainer>
                <InputSearch
                 show={searchState}
                 placeholder="Buscar filmes e séries"
                 onBlur={searchStateSwitch}
                 />
                 </InputContainer>
                <SearchIcon 
                show={!searchState}
                onClick={searchStateSwitch} src="\src\assets\imgs\searhIcon.svg"/>
            </HeaderDiv>
        </>
    )
}
export default Header