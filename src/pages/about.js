import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image.js"
import styles from "../components/styles/about.module.scss"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image className={styles.pic} />
                </div>
                <div className={styles.text}>
                    <h1>I'm a UX Designer who believes in the power of a story.</h1>
                    <p> As a musician turned designer, I believe that connecting people to a story leads to the most meaningful experiences -- it creates community.
                    I’ve always wanted to be a storyteller throughout my childhood. This led me to become a jazz musician. For nearly 12 years, I wrote my own story in New York City. There, I learned how to connect emotionally with diverse groups of people, in many a smoky jazz club (minus the smoke). I had my big break when I released my first album, which reached over 1 million listeners.</p>

                    <p>In addition to music, I’ve worked as a videographer and sound designer, helping artists and organizations increase their social media metrics by over 200% and gain nearly 10,000 unique viewers. My audiovisual work has been featured by audio industry giants like Moog Synthesizers and popular events platforms like Fever.
                    Other than that, I enjoy traveling, mushroom hunting, and photography -- all after a cup of home-roasted coffee.</p>

                    <p>I graduated from Columbia University with a degree in education. I’m currently based in and originally from Baltimore.
                    Thanks for reading.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About