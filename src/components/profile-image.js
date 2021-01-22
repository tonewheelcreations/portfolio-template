import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "about3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.profileImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.profileImage.childImageSharp.fluid} />
}

export default ProfileImage