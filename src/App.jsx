import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import styled from "styled-components"

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
`
