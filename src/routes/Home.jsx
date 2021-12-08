import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import styled from "styled-components"

export default function Home() {
  return (
    <Container>
      <Hero />
      <Navbar />
      <div className="content" style={{ minHeight: "150vh", background: "beige" }}>
        
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1920px;
  width: 100vw;
  background-color: #fff;
`
