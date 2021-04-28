import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h1>Constrained Image</h1>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="new"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-1"
          as="section"
        />
      </article>
      <article>
        <h1>Full Width</h1>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="new"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-1"
          as="section"
        />
      </article>
      <article>
        <h1>Fixed</h1>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="new"
          placeholder="blurred"
          layout="fixed"
          className="example-1"
          as="section"
          height={200}
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-1 {
    border-radius: 2rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Images
