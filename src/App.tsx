import React from 'react';
import SignUp from "./User/SignUp";
import SignIn from "./User/SignIn";
import styled from "styled-components";
import {ReactComponent as SvgIcon} from "./shared/Icon/lock.svg";
import Copyright from "./shared/components/Copyright";

const IconContainer = styled.span`
  margin: 0 auto;
  background-color: #f48fb1;
  color: #121212;
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
`;

const LockIcon = styled(SvgIcon)`
  >svg {
    path {
    fill: red;
    }
  }
`;

const Container = styled.div`
  max-width: 444px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin: 64px auto;
  padding-left: 16px;
  padding-right: 16px;
`;



export default function App() {
  return (
    <Container>
      <IconContainer>
        <LockIcon/>
      </IconContainer>
        <SignIn/>
        {/*<SignUp/>*/}
      <Copyright/>
    </Container>
  );
}

