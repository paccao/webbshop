import styled from "styled-components"
import ArrivalsArticle from "./ArrivalsArticle"

export default function Hero() {
  return (
    <Container>
      <img src="" alt="Image of the company logo" />
      <img src="" alt="Modell on chair" />
      <aside>
        <section>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            ipsam animi accusantium delectus voluptatum eius.
          </p>
          <button>DISCOVER MORE</button>
        </section>
      </aside>
      <ArrivalsArticle />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
`
