import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AlbumImage = () => {
  const data = useStaticQuery(graphql`
    query {
      albumImage: file(relativePath: { eq: "tonewheel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.albumImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.albumImage.childImageSharp.fluid} />
}

export default AlbumImage