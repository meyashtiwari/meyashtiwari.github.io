import React from "react"
import styled from "styled-components"
import NavBar from "../NavBar"

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  )
}

const Container = styled.div`
  // min-height: 100vh;
  // min-width: 100vw;
`;